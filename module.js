// const xyz = require('./people');
// console.log(xyz);

// const people = require("./people")

// console.log(xyz.people,xyz.ages);
// const {people} = require('./people.js');
// console.log(people);

const os = require('os');
// console.log(os.platform(),os.homedir());


// readFile---------------- ---------------------------------------------

const fs = require('fs');
// fs.readFile('./doc/doc.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// console.log('last line');

// writeing File -------------------------------------------------------------

// fs.writeFile('./doc/doc1.txt','bhanu is so intelligent',()=>{
//     console.log('File written');
// });

// directories------------------------------------------------------------
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if (err){
//             console.log(err);
//         }
//     });
// } else{
//     fs.rmdir('./assets',(err)=>{
//         console.log(err);
//     });
// }
// if(!fs.existsSync('./doc/demo.txt')){
//     fs.writeFile('./doc/demo.txt','banu',(err)=>{
//         if(err){
//             console.log('error');
//         }
//         console.log('file created');
//     });
// }else{
//     console.log('file exists');
// }
// console.log('cr');

// deleting file ----------------------------------------------------------------

// if(fs.existsSync('./doc/demo.txt')){
//     fs.unlink('./doc/demo.txt',(err)=>{
//         if(err){
//             console.log('error2');
//         }
//         console.log('file deleted');
//     });
// }else{
//     console.log('file not exists');
// }
// console.log('delt')

