const http = require('http');
const fs = require('fs')
const myServer = http.createServer((req, res) => {
    console.log("server1");

    if (req.url == '/') {
        res.end("ABES COLLEGE");
    }

    else if (req.url == '/about') {

        res.writeHead(200, { 'Content-Type': 'text/html' });  
        res.write(`
            <html>
                <body>
                    <h1>About Page</h1>
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" width="400"/>
                </body>
            </html>
        `);
        res.end();
    }

    else {
        res.end("Address");
    }
});

myServer.listen(8000, () => {
    console.log("server is running");
});

// fs.writeFileSync('./cse-c.txt',"hi we are coders in node")


// fs.writeFile('./a.txt','abes college is',()=>{})

// fs.writeFile('demo.txt', 'Hello ABES!', (err) => {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("File written successfully");
//     }
// });



// fs.readFile('./a.txt','utf-8',(err,res)=>
// {
//     if(err)
//         console.log(err)
//     else
//         console.log(res)
// })

// fs.appendFileSync("./a.txt",'google')


//  fs.appendFile("./a.txt",'  ccgoogle',(err,res)=>{ 
//     if(err)
//         console.log(err)
//     else
//         console.log('complete')
//  })

