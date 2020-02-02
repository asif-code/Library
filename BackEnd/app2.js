const fs = require('fs');

fs.writeFile("index ?.html","dfjsgbgc", function(err) {
    if (err) {
        console.log("failed"); 
    } else {
        console.log("success");
    }
    
});

console.log("final line");