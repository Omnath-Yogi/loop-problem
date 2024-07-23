//  var s = "";

let image = ["OIP.jpeg","ironman.jpeg","hulk.jpg","strange.jpeg"]
 console.log();
 let s =""
for(let i=1 ; i<=65; i++){

           let r = Math.floor(Math.random()*4)
     s += `<div class="card"><img src=${image[r]}> </div>`
 }
    document.getElementById("main").innerHTML= s;





