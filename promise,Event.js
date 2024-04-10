// console.log("hello");
// const arr=[1,2,3,4];
// arr.forEach((a)=>{
//     console.log(a);
//     return a;
    // return likhne par jo undifined aa rha tha vo hat gya.
// });

// const ans=arr.map(a=>a**2);
// const ans3=arr.map(a=>parseInt(a));
// console.log(ans);

// array diff:--
// const arr=[10,20,30];
// const ans=arr.push(50);
// console.log(ans);
// const b=arr.map(arr=>arr*2);
// console.log(b);

// print element which greater than any no:--
// const arr=[10,20,30,68,89,44];
// const ans=arr.filter((a)=>{
//     if(a>20)
//     return true;
// else
// return false;

// })
// console.log(ans);


  // USA me na 'I' or na 'i' h to vo include nhi hua:---
// const arr=[
//     'delhi','mumbai','Noida','Iraq','india','USA'
// ]
// // console.log(arr);
// const b=arr.filter((s)=>{
// if(s.includes('i')||s.includes('I')){
// return true;
// }
// else{
// return false;
// }
// });
// console.log(b);
   
// tha jisme india attach h sirf vo print ho:---
// const arr=[
//         'delhi','mumbai-india','Noida India','Iraq','india-India','USA'
//     ]
//     // console.log(arr);
//     const b=arr.filter((s)=>{
//     if(s.includes('india')){
//     return true;
//     }
//     else{
//     return false;
//     }
//     });
//     console.log(b);

// const arr=[
//             'delhi','mumbai-india','Noida India','Iraq','india-India','USA'
//        ]
// const ans=arr.filter((a)=>{
//     const v=a.toLowerCase();
//     if(v.includes('delhi')){return true;}
//     else{return false;}
// });

// reduce:--
// const arr=[1,2,3,4];
// const ans=arr.reduce(()=>{

// })
// extra:--
const arr=['ab','cd','xy'];
const ans=arr.reduce((total,curl)=>{
    console.log(total,curl);
});
console.log(ans);

