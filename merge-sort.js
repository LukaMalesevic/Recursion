function mergeSort(array) { 
    if (array.length <= 1) {
        return array; 
    }

    let middle = Math.floor(array.length / 2);
    let firstArray = array.slice(0, middle);
    let secondArray = array.slice(middle);

    firstArray = mergeSort(firstArray);
    secondArray = mergeSort(secondArray);

    return merge(firstArray, secondArray);
}

function merge(firstArray, secondArray) {
    let mergedArray = [];

    for(let i = 0; i < firstArray.length; i) {
        for(let j = 0; j < secondArray.length; j) {
            if (firstArray[i] < secondArray[j]) {                                            
                mergedArray.push(firstArray[i]);
                i++;
                if (i === firstArray.length) {
                    mergedArray = mergedArray.concat(secondArray.slice(j));
                    return mergedArray;
                }
            } else {   
                mergedArray.push(secondArray[j]);
                j++;
                if (j === secondArray.length) {
                    mergedArray = mergedArray.concat(firstArray.slice(i));
                    return mergedArray;
                }
            }
        }
    }
}

let array = [3, 2, 1, 13, 8, 5, 0, 1];
let sortedArray = mergeSort(array);
console.log(sortedArray);
