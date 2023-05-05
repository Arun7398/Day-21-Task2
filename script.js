const apiUrl = "https://cat-fact.herokuapp.com/facts";

async function getCatFacts() {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();

		let content = "";
		for (const val of data) {
			console.log (data, val)
			content += `<p>${val.text}</p>`;
		}
		document.getElementById ("cat-facts").innerHTML = content;
	} catch (error) {
		console.error(error);
	}
}

getCatFacts();