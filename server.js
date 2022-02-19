const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{
    console.log("request made", req.url, req.method)

    // set header
    res.setHeader("Content-Type", "text/html")
    // get path
    let path = "./views";
    switch (req.url) {
        case "/":
            path+="/home.html";
            res.statusCode = 200;
            break;
        case "/home":
            res.statusCode = 200
            path+="/home.html"
            break;
        case "/about":
            res.statusCode = 200
            path+="/about.html"
            break;
        default:
            path+="/404.html"
            res.statusCode = 404
            break;
    }
    // send an html file
    fs.readFile(path, (err, data)=>{
        if (err) {
            res.end("<h2>An Error Went Out</h2>")
        }else{
            res.end(data)
        }
    })

})

server.listen(3000, "localhost", ()=>{
    console.log("listening")
})