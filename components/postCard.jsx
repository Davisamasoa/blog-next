import React from "react";
import Link from "next/link";

export function PostCard(props) {
	return (
		<article>
			<Link
				className="md:w-[600px] sm:w-[500px] w-full cursor-pointer hover:bg-zinc-800 border-[1px] border-gray-500 rounded-2xl mt-10 flex flex-col gap-5 justify-center items-start p-5"
				target={"_blank"}
				href={{
					pathname: `/post/${props.slug}`,
					query: {
						id: props.slug,
					},
				}}
			>
				<h2 className="sm:text-2xl text-[20px] text-white font-bold">{props.title} </h2>
				<img className="w-full rounded-md" src={`${props.img}`} />
				<span className="text-white ">{props.date}</span>
			</Link>
		</article>
	);
}
