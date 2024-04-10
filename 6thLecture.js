
// setTimeout(()=>{console.log('timeout1....')},4000)
// console.log('start');
// setTimeout(()=>{console.log('timeout2....')},5000)
// console.log('intermidiate');
// console.log('end');

// function createOrder(x,fn){
//     console.log(x);
//     // 
//     fn('like123');
//     setTimeout(()=>fn('like123'),1000)
// }
// function makePayment(orderId){
//     console.log(orderId);
// }
// createOrder('soap',makePayment);

// how to write PROMISES:--
// const pr=new Promise((resolve,reject)=>{
//     if(true){
//         resolve();
        // we can also use in palce of resolve() of above line 
        // setTimeout(()=>){
        //     resolve();
        // },1000);
//     }
//     else{
//         reject();
//     }
// });
// console.log(pr);

// now we see our promise:--
// const pr=new Promise((resolve,reject)=>{
// setTimeout(()=>{resolve("done-123");},1000);
// yha hmne catch() ki help se is problem ko resolve karliya.
// setTimeout(()=>{reject("out of stock");},1000);
// });
// console.log(pr);

// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// if we not write value like done 123:-
// then it show Undefined

// we ca also write of reject set time out:--
// pr.catch((err)=>{
//     console.log(err);
// })

setTimeout(function abc(){
console.log('I am one');
},0);

const pr=new Promise((resolve,reject)=>{
     setTimeout(()=>{res("done-123")},0)
});