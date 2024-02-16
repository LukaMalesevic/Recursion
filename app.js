function fibs(n)
{
    let fibArray = [];

    if(n === 0) return fibArray;
    else {
        for(let i = 0; i < n; i++)
        {
            if(i < 2) fibArray.push(i);
            else fibArray.push(fibArray[i-1] + fibArray[i-2]);
        }
        return fibArray;
    }
}



function fibsRec(n, fibArray = [], sum = 0)
{
    if(n === 0) return fibArray;
    else
    {
        if(sum < 2)fibArray.push(sum++);
        else fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2]);
        return fibsRec(n-1, fibArray, sum);
    }
    
}

console.log(fibs(8));
console.log(fibsRec(8));