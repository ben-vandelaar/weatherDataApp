//Add the difference [[day,max,min,difference]]
function findDifference(arr) {
    let addedDifferenceArr = arr
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i][1];
        let b = arr[i][2];
        let difference = Math.abs(a - b);
        arr[i].push(difference);
    }
    return addedDifferenceArr
}

module.exports = {
    findDifference
}