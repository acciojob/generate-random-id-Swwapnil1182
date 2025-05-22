function makeid(l) {
  // write your code here
	const characters="abcdefghijklmnopqrstuvwxyz0123456789"
	let res=''
const length = Number(l);
	for(let i=0i<length;i++){
		const randomText=Math.floor(Math.random()*characters.length)
		res=res+characters[randomText]
	}
	return res
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));


