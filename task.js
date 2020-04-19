function numberEntry(num) {
    let numArray = [];
    for(let i = 1; numArray.length < num; i++){
        if(i % 2 == 0 && i % 3 == 0 && i % 5 == 0){
            numArray.push("yu-gi-oh");
    }else if (i % 2 == 0 && i % 3 == 0){
            numArray.push("yu-gi");
    }else if (i % 2 == 0 && i % 5 == 0){
            numArray.push("yu-oh");
    }else if (i % 3 == 0 && i % 5 == 0){
            numArray.push("gi-oh");
    }else if (i % 2 == 0){
            numArray.push("yu");
    }else if (i % 3 == 0){
        numArray.push("gi");
    }else if (i % 5 == 0){
        numArray.push("oh");
}else {
    numArray.push(i);
        }
    }console.log(numArray);
    return numArray;
}numberEntry(100);