import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { requestApi } from "../../api";
import { Navbar } from "../../components/navbar";
import { PostPage } from "../../components/postPage";
import { PostPageSkeleton } from "../../components/skeleton/PostPageSkeleton";
import { TLSkeleton } from "../../components/skeleton/TLSkeleton";

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
					<PostPageSkeleton />
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
