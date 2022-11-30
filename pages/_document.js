import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<title>Blog</title>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
