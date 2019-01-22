//Trim the arrays getting rid of the title the empty space and the Average
function arrTrimmer(arr) {
    let trimmedArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i > 1 && i < 32) {
            trimmedArr.push(arr[i]);
        }
    }
    return trimmedArr
}

module.exports = {
    arrTrimmer
}