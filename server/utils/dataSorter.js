
//Format the string into arrays
function stringSplitMap(data){
        let stringData = data.toString("utf8").split("\n").map((i) => {
           return i.split(" ");
   });
   return stringData;
}

//Remove empty arrays
function arrCleaner(arr) {
    for (let i = 0; i < arr.length; i++) {
        cleanedArr[i] = arr[i].filter(j => {
            return j !== ''
        })
    }
}

//Trim the arrays getting rid of the title the empty space and the Average
function arrTrimmer(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i > 1 && i < 32) {
        return trimedArr.push(arr[i]);
        }
    }
}

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

//Add the difference [[day,max,min,difference]]
function findDifference(arr) {
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i][1];
        let b = arr[i][2];
        let difference = Math.abs(a - b);
       return arr[i].push(difference);
    }
}

//Sort the maxMinArr Array based of the difference
function sortedArray (){
   return sortedArr = maxMinArr.sort((a, b) => a[3] - b[3])
}

module.exports = {
    stringSplitMap,
    arrCleaner, 
    arrTrimmer,
    maxMinArrBuilder,
    findDifference,
    sortedArray
}