//Create a 2d array [[day,max,min]]
function maxMinArrBuilder(arr) {
    for (let i = 0; i < arr.length; i++) {
        maxMinArr.push([])
        for (let j = 0; j < 3; j++) {
            if (j === 0) {
                maxMinArr[i][j] = parseInt(arr[i][j]);
            } else if (j === 1) {
                maxMinArr[i][j] = parseInt(arr[i][j]);
            } else if (j === 2) {
                maxMinArr[i][j] = parseInt(arr[i][j]);
            }
        }
    }
}


export default maxMinArrBuilder