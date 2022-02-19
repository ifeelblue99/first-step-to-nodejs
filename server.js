const http = require("http")

const server = http.createServer((req, res)=>{
    console.log("request made", req.url, req.method)

    res.setHeader("Content-Type", "text/html")
    res.write("<a href='https://github.com/ifeelblue99'>click me!</a>")
    res.end()
})

server.listen(3000, "localhost", ()=>{
    console.log("listening")

})