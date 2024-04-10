// const obj=require('\.6thLec-node');
// obj.sum(2,3);

// (2).
// yha jo likha h vo max size me print ho rha h..
// const figlet=require("figlet");
// figlet('hello world :',(err,data)=>{
//     console.log(data);
// });

// (3).

// async function getApi(){
//     const pr= await fetch('https://api.github.com/users/deepak3440');
//     const data=await pr.json()
//     console.log(pr);
// }
// getApi();

// (4).
// async function getApi(){
//     console.log('start');
//         const pr= await fetch('https://api.github.com/users/deepak3440');
//         console.log("making json");
//         const data=await pr.json();
//         console.log(":fetch data:");
//     }

//     getApi();
//     console.log('end');

// (5).
console.log("start");
async function callAPI(){
    console.log('promise started')
    setTimeout(()=>{
        console.log('timeout....')
    
    })
}
