function querySearch() {
	const url = 'http://sample.com/?a=1&b=2&c=xx&d#hash';
	const regrex = /[&|?][\w]+=[\w]+/g
	const reg2 = /&([\w]+)[^=]/g
    const r= url.match(regrex);
    console.log(r);
  	const ret = r.reduce((obj, i)=>{
      	let [key, val] = i.substring(1).split('=');
      	obj[key] = val;
      	return obj;
    	
    }, {});
  	reg2.test(url);
	ret[RegExp.$1]=''
      console.log(ret);
    return ret;
  
};

function isHaveRole(obj){
	const track = new Set([obj]);
  	
  	function isCycle(obj){
      if(obj==null || typeof obj!='object') return false;
      console.log(obj);
    	return Object.keys(obj).some(item=>{
        	if(track.has(obj[item])) return true;
              track.add(obj[item]);
              return isCycle(obj[item])
        })
    }
  	return isCycle(obj);
}
const obj2 = { name:'tab' };
const obj3 = { name:'line' };
obj3.c = obj3;

obj2.nest = {
	obj3
}
const obj = { c: "a" };
obj.b = obj; // obj有环
// console.log(isHaveRole(obj));
function lastPromise(promiseFunction) {
    let promise, rej;
  return function(){
    if(promise==null) {
        
        promise = null;
        Promise.reject();
    }
    
    promise =  new Promise(async function(resolve){
        // promiseFunction.then(res=>{
        //     resolve(res);
        //     promise = null;
        // })
        
        let ret = await promiseFunction.call(this);
        resolve(ret);
        
    }, function(reject) {
        rej = reject
    });

    return promise;
     
  }
}
let count = 1;
let promiseFunction = () =>
  new Promise(rs =>
    setTimeout(() => {
      rs(count++);
    })
  );

let lastFn = lastPromise(promiseFunction);

// 测试用例
lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 3