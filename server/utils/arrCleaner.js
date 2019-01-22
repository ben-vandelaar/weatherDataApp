//Remove empty arrays
function arrCleaner(arr) {
    let cleanedArr = []
    for (let i = 0; i < arr.length; i++) {
        cleanedArr[i] = arr[i].filter(j => {
            return j !== ''
        })
    }
    return cleanedArr
}

module.exports = {
    arrCleaner
}