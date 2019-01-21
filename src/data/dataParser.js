const fs = require('fs')



let text = "";
let cleanedArr = [];
let trimedArr = [];
let maxMinArr = [];
let sortedArr = [];

try {
    //Grab the File turn it into Arrays
    text = fs.readFileSync("./weathervisapp/src/data/weather.dat").toString("utf8").split("\n").map((i) => {
        return i.split(" ");
    });
    // console.log(text)

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
                trimedArr.push(arr[i]);
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
            arr[i].push(difference);
        }
    }
    //Sort the Array based of the difference
    function sorter(arr) {
        sortedArr = arr.sort((a, b) => a[3] - b[3])
    }

    //Run the functions
    arrCleaner(text);
    arrTrimmer(cleanedArr);
    maxMinArrBuilder(trimedArr);
    findDifference(maxMinArr);
    sorter(maxMinArr)

    console.log(maxMinArr)

} catch (e) {
    console.log('Error', e.stack);
}
