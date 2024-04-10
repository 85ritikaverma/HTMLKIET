// const fs=require("node:fs");
// const data=fs.readFileSync('./myReadme.txt');
// console.log(data);
// console.log(data.toString());

// (2nd)method
// const data=fs.readFileSync('./myReadme.txt',{encoding:'utf-8'});
// console.log=(data);


// (2).
// const b=new Buffer.from('abc');
// console.log(b);
// print 61 62 63 written in Hexadecimal no.

// (3).
// const n=new Buffer.from('abc');
// console.log(n.toString());
// n.write('other');
// console.log(n.toString());

// (4)
// const fs=require('fs');
// // fs.writeFileSync('./myReadme.txt',"10th april:day 7");
// const data=fs.readFileSync('./myReadme.txt',{encoding:'utf-8'});
// console.log(data);
// console.log('end');
// myReadme.txt file ka content ko merge kar diya idther ke content se.

// const fsPromises=require('fs/promises');
// console.log('start');
// const pr=fsPromises.readFile('./myReadme.txt',{encoding:'utf8'});
// pr.then((res)=>{
//     console.log(res);
// })
// console.log("end");

// (5)call back in file system:---
// const fs=require('fs');
// fs.readFile('./myReadme.txt',{encoding:'utf8'},(err,data)=>{
//     console.log(data);
// })

// (6) http://localhost 
// const http=require('http');
// const app=http.createServer((req,res)=>{
// console.log("received");

// });
// app.listen(1400);
// it is done when we write localhost 1400
// written as http://localhost:1400















// (7).


const http=require('http');
const fs=require('fs');
const data=fs.readFileSync('./data.json','utf8');
console.log(data);
const dataobj=JSON.parse(data);
const products=dataobj.products;

const htmlTemplate=`
<!DOCTYPE html>
<head></head>
<body>
</body>
`
const cardTemplate=`
<div class='product-card'>
<h2>_TITLE_</h2>
<p>_INFO_</p>
</div>
`;
// const page=htmlTemplate.replace('_PRODUCT-CARDS-',cardTemplate);
const card1=cardTemplate.replace('-TITLE-','xiaomi note pro 11');
const page=htmlTemplate.replace('_PRODUCT-CARDS-',card1);

const allCards=products.map((elem)=>{
    let newCard=cardTemplet;
    newCard=newCard.replace('_TITLE_',elem.title);
    newCard=newCard.replace('_INFO_',elem.title);
    return newCard;
});

const app=http.createServer((req,res)=>{
console.log("received");                                    
console.log(req.url);
res.writeHead(200,{'content-type':'text/html',});
res.end(page);
// yha oject me ham url ko use kar rhe h 

});
app.listen(1400,()=>{
    console.log('.........server start......');
});





