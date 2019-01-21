//Remove empty arrays
function arrCleaner(arr) {
    for (let i = 0; i < arr.length; i++) {
        cleanedArr[i] = arr[i].filter(j => {
            return j !== ''
        })
    }
}

export default arrCleaner