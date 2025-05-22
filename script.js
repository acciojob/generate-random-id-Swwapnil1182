function makeid(l) {
  // write your code here
	const characters="abcdefghijklmnopqrstuvwxyz0123456789"
	let res=''

	for(let i=0i<1;i++){
		const randomText=Math.floor(Math.random()*characters.length)
		res=res+characters[randomText]
	}
	return res
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));


