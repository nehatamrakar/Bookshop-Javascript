export function isOdd(number){
    return number % 2 === 1
}

export function isEven(number){
    return number % 2 === 0
}


export function filterfn(numberList, predicatefn){
    let finalList = []
    numberList.forEach( (number)=>{
        if(predicatefn(number)){
            finalList.push(number)
        }
    })
    return finalList;
}

