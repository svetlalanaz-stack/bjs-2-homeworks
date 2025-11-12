function getArrayParams(...arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
        avg: Number((arr.reduce((acc, item) => acc + item, 0) / arr.length).toFixed(2))
    };

}

function summElementsWorker(...arr) {
    return arr.reduce((acc, item) => acc + item, 0)
}

function differenceMaxMinWorker(...arr) {
    return arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function differenceEvenOddWorker(...arr) {
    const sumEvenElements = arr.filter(item => item % 2 === 0).reduce((acc, item) => acc + item, 0);
    const summOddElements = arr.filter(item => item % 2 !== 0).reduce((acc, item) => acc + item, 0);
    return sumEvenElements - summOddElements;
}

function averageEvenElementsWorker(...arr) {
    return arr.filter(item => item % 2 === 0)
        .reduce((acc, item, index, filteredArray) => {
            if(index === filteredArray.length - 1) {
                return (acc + item) / filteredArray.length;
            }
            return acc + item;
        }, 0)
}

function makeWork(arrOfArr, func) {
    return Math.max(...arrOfArr.map(item => func(...item)))
}