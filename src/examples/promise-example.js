export const greeting = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("Good Morning");
    }, 5000);
  });
}

console.log("Wait 5 seconds for  the greeting");
greeting().then((message) => console.log(message));
