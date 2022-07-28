export function makeCoffeeCallbacks ()  {
    grindCoffee()
}

function grindCoffee(){
    setTimeout( () => {
        console.log("Grinding Coffee done");
        brewCoffee();}, 3000);

}

function brewCoffee(){
    setTimeout( () => {
        console.log("Brewing Coffee done");
        serveCoffee();}, 5000);

}

function serveCoffee(){
    setTimeout( () => {
        console.log("Serving Coffee done");}, 1000);

}
makeCoffeeCallbacks()
