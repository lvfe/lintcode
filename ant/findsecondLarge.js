var findSecondLarge = (arr) => {
    let arr_new = arr.sort((a, b)=>(a>b)?1:-1);
    return arr_new[2];
}

console.log('====================================');
console.log(findSecondLarge([1,2,3,4, 2.5]));
console.log('====================================');