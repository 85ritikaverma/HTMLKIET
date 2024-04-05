let a=new String("hello");
let b="hello";
if(a==b){
    console.log("yes");
}
else{
    console.log("no");
}
// const obj={
//     name:'ajay',

// };
// console.log(obj);
const obj={
    'name':'ritika',
    'lname':'verma',
};
console.log(obje);
console.log(obj);
const obje={
    'name':'ritika',
    'lname':'verma',
};
const str=JSON.stringify(obje);
document.write(str);

//  document .write ki vajah se ye console pa na print hokar web page par print ho jaega.

// const obj={
// "name":"ritika",
// "roll":"20",
// }
// obj.name=20;
// console.log(obj);
// yha par name change ho rha h i.e, string se number.

// let arr=[1,2,34];
// arr=[3,4,5,2];
// arr[10]=20;  value ko change karne ke liye
// arr.push(10);
// push element ko array me daal deta h

// console.log(typeof(arr));
// array ka type konsa h yaha object h.


// function checkIf(object){
//     if(Array.isArray(x)){
//         console.log("not object");
//     }
//     else if(typeof(x)=='object'){
//         console.log("object");
//     }
//     else{
//         console.log("not object");
//     }
// }
// const arr=['name',2,true];
// const obj={
//     'name':'ritika',
//     'roll':20,
//     1:'else'
// }

// for(let i=0;i<4;i++){
// console.log(obj[i]);
// }
// for(let i in arr){
//     console.log[i];
// }

console.log(window)
console.log(window.innerHeight)
console.log(innerHeight)
console.log(innerWidth)
console.log(window.document)

console.dir(console)
console.dir(window.innerHeight)
console.dir(innerHeight)
console.dir(window)
console.dir(innerWidth)
console.dir(window.document)

// const s=document.getElementsByTagName('h3')
// console.log(s)
// yaha HTMLCollection [h3] ye array ki tarah dikh rha h but not array ye kuch collection h

// const r=
// document.getElementById('p1')
// console.log(r)
// const p=
// document.querySelectorAll('div.p1')
// document.querySelectorAll('p.p1')
// document.querySelectorAll('div>p1')

// const res=
// document.getElementById("c1");
// res.innerText="Hello";
// res.innerHTML="<h1>hello </h1>"
// console.log(res)
// innerText me tags use nhi karsakte
// but innerHTML me tags use karsakte h

// const r=
// document.createElement("p1")
// r.innerText="Dynamic text"
// console.log(r)
// document.body.appendChild(r)
// yha ek div ke content ko append kar diya 2nd div se
// give property of remove

// if we use class in   getElemenstByclass() then
// to hmm (0,1,...)karke hmm change karsakte h
// but getElemenstById() ID me (0,1,...) nhi kar sakte

// const e=
// document.getElementById('c2')
// e.remove()

// const div=
// document.querySelector('div');
// console.log(div)
// d.remove();
// remove ues to delete data from page
// const cld=
// document.querySelector('p')
// div.removeChild(cld);
// yha child ka first element remove ho gya

// cld=child
// div=parent
// document.getElementsByTagName('p')
// div.removeChild(cld[1]);
// yha child ka 2nd element remove ho gya

// function getInfo(){
// console.log("btn clicked");
// }
// function getInfo(e){
//     const s=
//     document.querySelector("div");
//    const t= document.createElement('p');
//     t.innerText="my name is ritika";
//     s.append(t);
// console.log(e);
//}
// function getInfo(){
// e.target.setAttribute('style','color:red')
// e.target.style.backgroundColor='green';
// e.target.style.color='red';
// }

// form handeling:-
const firstNamechange =(e)=>{
    
    const val =e.target.value;
    if(val.length<3){
        console.log('correct');
    }

}
function submitForm(e){
e.preventDefault();
// preventDefault means:-
console.dir(e);
}

function submitForm(e){
    e.preventDefault();
    const t=e.target
    const res={};
    for(let i=0;i<t.length;i++){
        const ty=(t[i].type);
        const vl=(t[i].value);
         const nm=(t[i].name);
        console.log(ty,vl,nm);
        if(ty=='checkbox'&& t[i].checked){
            console.log(t[i].checked)
        }

    }
    console.log(res);
}

