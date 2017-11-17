// sketch.js
function setup() {
  createCanvas(500,400)
}

function draw() {
  var x = 50

  background(100)
  fill(250)
  
  var x = 50 

  for (var i = 0; i < 8; i++) {
    rect(x, height/2, 40, 40)
    
     
    
       
       
    var answer = i / 2 
    var remainder = i % 2
  
    if (remainder === 0) {
      fill('black')
    } else {
      fill('white')
    }
     x += 40;
  }
 
}
