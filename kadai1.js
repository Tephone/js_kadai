function bottleCount(num) {
    let division = Math.floor(num / 3)
    let remainder = num % 3
    let totalDivision = division
    let totalDivisionRemainder = division + remainder

    while (totalDivisionRemainder >= 3) {
        division = Math.floor(totalDivisionRemainder / 3)
        remainder = totalDivisionRemainder % 3
        totalDivisionRemainder = division + remainder
        totalDivision += division
    }
    return num + totalDivision
}

function lowestPrice(num) {
    const BottleCount = bottleCount(num)
    const totalPrice = num * 100 * 1.1

    return Math.floor(totalPrice / BottleCount)
}

console.log(bottleCount(100))
console.log(`${lowestPrice(11)}円`)