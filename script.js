function makeid(l) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let res = '';
  const length = Number(l);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    res += characters[randomIndex];
  }

  return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");

alert(makeid(l));
