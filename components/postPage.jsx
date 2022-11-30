import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { requestApi } from "../api";
import { Navbar } from "../components/navbar";

export function PostPage(props) {
	return (
		<>
			<article className=" md:w-[900px] sm:w-[700px]  w-full cursor-pointer mt-10 flex flex-col gap-5 justify-center items-start sm:p-5">
				<h2 className="sm:text-4xl text-center w-full text-[20px] text-white font-bold">{props.title} </h2>

				<p dangerouslySetInnerHTML={{ __html: props.content }} className="text-white"></p>
				<span className="text-white ">{props.date}</span>
			</article>
		</>
	);
}
