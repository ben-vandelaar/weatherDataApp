//Format the string into arrays
function stringSplitMap(data){
    let stringData = data.toString("utf8").split("\n").map((i) => {
       return i.split(" ");
});
return stringData;
}

export default stringSplitMap