import { useEffect, useState } from "react";
import { requestApi } from "../api";
import { PostCard } from "../components/postCard";

import { Navbar } from "../components/navbar";
export default function Home() {
	const [post, setPost] = useState([]);

	useEffect(() => {
		carregarPosts("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518");
	}, []);

	function carregarPosts(url) {
		requestApi(url)
			.then((data) => setPost([...post, ...data]))
			.catch((err) => console.log(err));
	}

	function formatDate(postDate) {
		const date = postDate.split("T");
		const dateFormated = `${
			date[0][8] +
			date[0][9] +
			date[0][7] +
			date[0][5] +
			date[0][6] +
			date[0][4] +
			date[0][0] +
			date[0][1] +
			date[0][2] +
			date[0][3]
		}`;
		return dateFormated;
	}

	return (
		<>
			<Navbar />

			<main className="flex px-6 w-full h-full min-h-[60vh] flex-col justify-center items-center">
				<>
					{post.map((post) => (
						<>
							<PostCard
								key={post.id}
								title={post.title.rendered}
								img={post?._embedded?.["wp:featuredmedia"]?.["0"]?.source_url}
								slug={post.slug}
								date={formatDate(post.date)}
							/>
						</>
					))}
					<button
						onClick={() => {
							carregarPosts(
								`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${
									post.length / 10 + 1
								}`
							);
						}}
						className="bg-white w-12 h-12 border-2 border-white hover:bg-transparent hover:text-white rounded-[100%] flex justify-center items-center mt-10 mb-8"
					>
						<i className="bi bi-arrow-clockwise text-2xl "></i>
					</button>
				</>
			</main>
		</>
	);
}
