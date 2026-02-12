const http = require('http');

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
