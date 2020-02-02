const fs = require("fs");
const axios = require("axios");

var output;
axios
.get("http://example.com")
.then(res => {
axios
 .get("http://norving.com/")
 .then(res2 => {
    fs.writeFile("combined.html",res.data + res2.data ,err =>{
        if (err) {
            console.log( "file write Failed");
        }
      });
     })
     .catch(err => {
        console.log("norving failed");
    });
})
    .catch(err => {
        console.log("norving failed");
    });
