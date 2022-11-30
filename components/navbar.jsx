import Link from "next/link";
import React from "react";

export function Navbar() {
	return (
		<Link href={"/"}>
			<nav className="mt-10 mb-10 cursor-pointer">
				<h1 className="text-blue-300 text-7xl font-extrabold w-screen text-center">BLOG</h1>
			</nav>
		</Link>
	);
}
