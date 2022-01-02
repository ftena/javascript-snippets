function rot13(str) {
	for (let i = 0; i < str.length; i++) {
		console.log(str[i] + " : " + String.fromCharCode((str[i].charCodeAt() - 13) % 13 + 65));
	}

	return str;
}

rot13("NOZ");
