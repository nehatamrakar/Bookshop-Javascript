export const greeting = (nextStep) => {
  setTimeout(() => {
    return nextStep("Good Morning");
  }, 5000);
}

console.log("Wait 5 seconds for  the greeting");
greeting((message) => console.log(message));

