//Add the difference [[day,max,min,difference]]
function findDifference(arr) {
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i][1];
        let b = arr[i][2];
        let difference = Math.abs(a - b);
        return arr[i].push(difference);
    }
}

module.exports = {
    findDifference
}