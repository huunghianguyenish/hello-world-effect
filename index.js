const timer = (ms) => new Promise((res) => setTimeout(res, ms));
const characters =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!'()*+, -./:;<=>?@[\]^_`{|}~ ";
let text = "Hello World";
let temp = "";
(async function () {
for (const ch of text) {
  for (const i of characters) {
    if (i == ch) {
        await timer(9);
        console.log(temp + i);
        temp += ch;
        break;
    } else {
        await timer(9);
        console.log(temp + i);
    }
  }
}
while(temp == text) {
    await timer(9);
    console.log(temp);
}
})();
