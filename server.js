const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);

    // set header Content 
    res.setHeader('Content-Type','text/html');

    // sendind a HTML FILE 

    // Routing using Switch case

    let path = './views/';

    switch(req.url){
        case '/':
            path+= 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/about-me':
            // res.statusCode =301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path+= '404.html';
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            res.end(data);
        }

    });    
    // res.write('bhanu pratap singh');
    // res.end();
});

server.listen(3000,'localhost',()=>{
    console.log('listening');   
});