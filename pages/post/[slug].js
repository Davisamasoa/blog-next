import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { requestApi } from "../../api";
import { Navbar } from "../../components/navbar";
import { PostPage } from "../../components/postPage";

export async function getServerSideProps(context) {
	const slug = context.query.slug;

	return {
		props: {
			slug: slug,
		},
	};
}

export default function Post(props) {
	const [postDetails, setPostDetails] = useState({
		title: "",

		content: "",

		date: "",
		content: "",
	});

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log(props.slug);
		requestApi(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${props.slug}`)
			.then((data) => {
				setPostDetails({
					title: data?.["0"]?.title?.rendered,

					content: data?.["0"]?.content?.rendered,

					date: props.date,
				});
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<Head>
				<title>{`Blog | ${postDetails.title}`}</title>
			</Head>

			<Navbar />
			<main className="flex px-6 w-full h-full min-h-[60vh] flex-col justify-center items-center">
				{postDetails.date == "" ? (
					<div className="min-w-full flex justify-center items-center">
						<button
							id="loading"
							className="text-blue-300   flex w-10 h-10 justify-center items-center text-5xl"
						>
							<i className="bi bi-arrow-clockwise  "></i>
						</button>
					</div>
				) : (
					<PostPage
						title={postDetails.title}
						img={postDetails.img}
						date={postDetails.date}
						content={postDetails.content}
					/>
				)}
			</main>
		</>
	);
}
