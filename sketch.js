function setup() {
  createCanvas(displayWidth,displayHeight);
  noLoop(); 
  var url= 'https://api.particle.io/v1/devices/YOUR_DEVICE_ID_HERE/analogvalue?access_token=YOUR_ACCESS_TOKEN_HERE';
  data = loadJSON(url, drawLight); 
}


function draw() {
  
  background(0); 
  
}

function drawLight(data){
  var i = 0; 
  stroke(180); 
  var reading = data.result; 
  print(reading);
  fill (200, 0, reading/10); 
  
  while (i < reading){
  ellipse(random(width), random(height), reading/50, reading/50);
  i++; 
  }

}
