export async function requestApi(url) {
	const data = await fetch(url);
	const response = await data.json();
	return response;
}
