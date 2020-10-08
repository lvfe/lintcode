var arr = ['*', 'd', 'c', '*', 'e', '*', 'a', '*'];
function parse(arr){
   return arr.sort((a, b)=>{
       if(a==='*') return -1;
       else return 1;
   })
    
}
console.log(parse(arr));