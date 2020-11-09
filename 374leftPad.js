function leftPad(str, len, ch){
    if(!ch && ch!=0){ch=' '}
    let left = len-str.length;
    let strStr = "";
    while(left){
        if(left%2==1){
            strStr+=ch;
        }
        if(left==1){
            return strStr+str;
           
        }
        left = Math.floor(left/2);
        strStr+=strStr;
        console.log(strStr);
    }
}
// console.log(leftPad("hello", 20, 3));
function MathPow(base, time){
    let ret = 1;
    var flag = time%2;
    while(time){
        
        if(time%2){
            ret*=base;
        }
        if(time==1&&flag){
            return ret;
        }
        ret *= ret; // 1 1 2
        time = parseInt(time/2);
    }
    return ret;
}
console.log(MathPow(2,4));