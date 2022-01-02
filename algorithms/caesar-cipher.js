function rot13(str) {
	  let alphabet = [];

	  for(let ascii = 65; ascii < 91; ascii++)
		  {
		      console.log("a) " + String.fromCharCode(ascii));

		  console.log("b) " + String.fromCharCode( ( (0+13) % 26) + ascii ) );

		      console.log("b) " + String.fromCharCode((ascii+13) % 26 + ascii));
		    }

	  return str;
}

rot13("SERR PBQR PNZC");
