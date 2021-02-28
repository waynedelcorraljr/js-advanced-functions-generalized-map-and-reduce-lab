function map(array, block) {
    let newArr = [] 
    for(const element of array) {
        newArr.push(block(element));
    }
    return newArr;
}

function reduce(array, func, startingPoint = 0) {
    let newVal = 0;
    for(const element of array) {
        if(!!element && typeof element === 'number') {
            newVal += element;
        } else if(!!element) {
            newVal = true;
        } else {
            newVal = false;
        }
    }
    if(typeof newVal === 'number') {
        return newVal + startingPoint;
    } else {
        return newVal; 
    }
}
