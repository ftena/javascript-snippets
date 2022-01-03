function rot13(str) {
	let result = "";

	for (let i = 0; i < str.length; i++) {
		if ((/[N-Z]/).test(str[i]))
		{
			result += String.fromCharCode((str[i].charCodeAt() - 13));
		}
		else if ((/[A-M]/).test(str[i]))
		{
			result += String.fromCharCode((str[i].charCodeAt() + 13));
		} else {
			result += str[i];
		}
	}

	return result;
}

console.log(rot13("NOYZAB"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));