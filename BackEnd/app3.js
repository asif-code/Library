const axios = require("axios");
const fs = require("fs");

var output;
axios
.get("http://example.com")
.then(res => {
    console.log("success");
    fs.writeFile("example.html",res.data, function(err) {
   if (err) {
       console.log( "file write Failed");
   }
 });
})
 .catch(err => {
    console.log("failed");
});

