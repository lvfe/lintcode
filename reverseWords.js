/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let s_ret=[];
    let s_to = s.split(/\s/g).filter((i)=>i.trim()!="")
    console.log(s_to);
    for(let i=0;i<s_to.length;i++){
        var tmp = s_to[s_to.length-1-i];
        s_ret.push(tmp);
        // let m = 0;
        // let to_str = "";
        // if(/[a-zA-Z]/g.test(tmp[tmp.length-1])){
            
        //     while(m<tmp.length){
        //         m++;
        //         to_str+=tmp[tmp.length-m]
        //     }
        // } else {
        //     m++;
        //     while(m<tmp.length){
        //         m++;
                
        //         to_str+=tmp[tmp.length-m]
        //     }
        //     console.log(to_str);
        //     to_str+=tmp[tmp.length-1];
        // }
        // s_ret.push(to_str);
    }
    return  s_ret.join(' ');
};
console.log(reverseWords("the sky is blue"));