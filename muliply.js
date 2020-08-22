/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function(num1, num2) {
    if(num1.length<2||num2.length<2){
        return ""+parseInt(num1)*parseInt(num2)
    }
    if(num1.length>num2.length){
        let t = num1;
        num1 = num2;
        num2 = t;
    }
    var ret = [];
   
    var len = num1.length+num2.length;
    for(let j=0; j<num1.length;j++){
        var f = 0;
        var list_1 = [];
        for(let i=0; i<num2.length;i++){
            let temp_1 = (num1[num1.length-1-j]-'0')*(num2[num2.length-1-i]-'0');
          
            list_1.push(temp_1+new Array(i).fill('0').join(''))
        }
        let lg = 1+num2.length;
        let tmp = 0;
        let tmpstr = "";
        for(let i=0; i< lg;i++){
            tmp = list_1.reduce((sum, y)=>{
                if(y.length-i-1<0) return sum;
                else return sum+parseInt(y[y.length-i-1])
            }, 0)
            
            tmpstr+=(tmp+f)%10;
           
           f = Math.floor((tmp+f)/10);
            
        } 
        let arr = "";
        for(let i=0;i<tmpstr.length;i++){
            
            arr+=tmpstr[tmpstr.length-1-i]
        }
        let i=0;
        while(i<arr.length){
            if(arr[i]=='0') {
                i++;
            } else {
                break;
            }
        }
        let str = arr.substr(i, arr.length)+new Array(j).fill('0').join('');
        ret.push(str);
    }
        
    let ll = '';
    let tmp = 0;
    let flag = 0;
    for(let i=0;i<len;i++){
        tmp = ret.reduce((sum, y)=>{
            if(y.length-i-1<0) return sum;
            else return sum+parseInt(y[y.length-i-1])
        }, 0)
        
        ll+=(tmp+flag)%10;
       
        if(tmp+flag>=10){
            flag = Math.floor((tmp+flag)/10);
        } else {
            flag = 0;
        }
    }


    let arr = "";
    for(let i=0;i<ll.length;i++){
        
        arr+=ll[ll.length-1-i]
    }
    let i=0;
    while(i<arr.length){
        if(arr[i]=='0') {
            i++;
        } else {
            return arr.substr(i, arr.length);
        }
    }
};