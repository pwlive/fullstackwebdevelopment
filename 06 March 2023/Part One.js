const powerTwo = (n) => {
    return n ** 2
}

function powerCube(powerTwo, n){
    return powerTwo(n) * n
}

// console.log(powerCube(powerTwo, 3));

function sayHello(){
    return () => {
        console.log("Hello Hitesh");
    }
}

let guessValue = sayHello()
// console.log(guessValue);

// guessValue()


const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m + n + p
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(2)(3)(4))


const myNums = [2, 3, 4, 5]

const sumArray = arr => {
    let total = 0
    arr.forEach(function(element){
        total += element
    });
    return total
}

// console.log(sumArray(myNums));

function oneMoreHello(){
    console.log("Hello hitesh ! ", Math.random());
}

setInterval(oneMoreHello, 1000)

// setTimeout(oneMoreHello, 2000)