// Max & Min
// const arry=[2,5,1,5,2,1,7,5,1,1,2]
// function findMax(preV,curV){
//     if(preV > curV){
//     return(preV)
//     }
//     return(curV)
// }
// function findMin(preV,curV){
//     if(preV<curV){
//         return(preV)
//     }
//     return(curV)
// }
// const Maximum= arry.reduce(findMax)
// const Minimum= arry.reduce(findMin)
// const MaxAndMin=[Maximum , Minimum]
// console.log(MaxAndMin)

//Count Repeat in Arry
const arr = [2,2,2,2,2,3,3,3,3,4,4,4,5,5,5,-1,-1,-1];
function countRepeat(arr){
    let obj={};
    for(let i of arr){
        if(i in obj) obj[i]++;
        else obj[i]=1;
    }
    return obj;
}

console.log(countRepeat(arr))

