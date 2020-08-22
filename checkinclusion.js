/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length) return false
    let aa = {}
    var s = [...s1];
   s.forEach(element => {
      if(typeof aa[element] == 'undefined') {
          aa[element] = 1;
      }  else {
          aa[element]++;
      }
    });
    ret = false;

    for(let i=0;i<s2.length-s1.length+1;i++){
        let sub = [...s2.substr(i, s1.length)];
        let keys = Object.keys(aa);
        ret = keys.every(i=>{
            let num = aa[i];
            let fi =  (sub.filter(elem=>elem==i)||[]).length;
            return fi==num;
        })
        if(ret ==true) {
            break
        }
    }
    return ret;
    
};
console.log(checkInclusion("trinitrophenylmethylnitramine",
"dinitrophenylhydrazinetrinitrophenylmethylnitramine"));