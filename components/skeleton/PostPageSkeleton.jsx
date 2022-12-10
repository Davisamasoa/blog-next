import React from "react";

export function PostPageSkeleton() {
	return (
		<>
			<article className="skeleton mt-10  md:w-[900px] sm:w-[700px]  w-full p-5  ">
				<div className="flex justify-center items-center">
					<div className="w-72 h-8 rounded-md bg-zinc-600"> </div>
				</div>

				<div className="w-auto mt-4 h-6 ml-10 rounded-md bg-zinc-600"> </div>
				<div className="w-full mt-1 h-6 rounded-md bg-zinc-600"> </div>
				<div className="w-full mt-1 h-6 rounded-md bg-zinc-600"> </div>
				<div className="w-full mt-1 h-6 rounded-md bg-zinc-600"> </div>
				<div className="w-full mt-1 h-6 rounded-md bg-zinc-600"> </div>
				<div className="w-full mt-1 h-6 rounded-md bg-zinc-600"> </div>
				<div className="w-full mt-1 h-6 rounded-md bg-zinc-600"> </div>
				<div className="w-full mt-1 h-6 rounded-md bg-zinc-600"> </div>

				<div className="w-64 h-6 mt-1 bg-zinc-600 rounded-md"> </div>
				<img
					className="md:w-2/3 w-full rounded-md mt-10"
					src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHCAcHBwcHBwcHBwoHBwcHBw8ICQcKFREWFhURExMYHCggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFRAPFSsZFR0rKysrKy0tLS0tKy0tKzc3Ny0rKzcrKzctLSstNysrLSsrKy03KystKysrKysrKysrK//AABEIAKgBKwMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAwDAQACEQMRAD8AlwAAAAAAAAAAAAAAAAAAAAAAAAAAAAFABAAAAAAXQAQAAAAAAAAAAAAAAAFAAAAABAAUAEABQAQAAAAAFABAAAAAAAAAAAAAAUAAAEAAAAABQAAAAAQAFAAABAAAAUAEAAAAAAAAAAABQAQAAAAAAAAAAAAAAAAAFAAAAABAAAAAAAAUAAAEAAAAAAAAAAAAAAAAAAABQAQAFABAAAAAAUAEAAAAABQAQAAAFABAAAAAAAAAAAAAAAAAAAAUAEAAAAAAAAAAAAAAAAAAAAAAABQAAAQAAAAAAAAAAAAAFAAABAAAAAAAAAAAAAAAAAAAAAAUAEAAABQAQAFABAAAAAAAAAAAAAAAAAAAAAAAAAAUAEABQAQAFAAABAAAAAAAAAAAAAAUAEAAAAABQAQAAAFABAAAAWgAgAKACAAAAtAAgAIAAAAAAACwAEABYP/Z"
				/>
			</article>
		</>
	);
}
