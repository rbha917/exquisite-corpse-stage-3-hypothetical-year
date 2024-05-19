let table;
let green, snow, clouds, sun, dry;

function preload(){
  table = loadTable('exquisite corpse stage 3.csv', 'csv', 'header')
  clouds = loadImage('images/h1.jpg');
  green = loadImage('images/h6.jpg');
  snow = loadImage('images/h10.jpg');
  dry = loadImage('images/h20.jpg');
  sun = loadImage('images/h21.jpg');
}

function setup() {
  createCanvas(800, 650);
}


function allMonths(){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let month = row.get("Months")
    fill(255);
    textAlign(CENTER);
    text(month, 70 + x * 60, 600);
  }
}

function showGreen(){
  for (x = 0; x < table.getRowCount(); x++){
      let row = table.getRow(x);
      let countGreen = row.get("Snow")
      for (y = 0; y < countGreen; y++){
        image(snow, 30 + x * 60, 10  - y * 50, 40, 450);
      }  
  }
}


function draw() {
  background(30);
  allMonths();
  image(green, 100, 300, 180, 280);
  image(green, 350, 300, 350, 280);
  image(clouds, 30, 10, 220, 290);
  image(clouds, 390, 10, 340, 290);
  image(dry, 210, 200, 160, 270);
  image(dry, 640, 200, 50, 270);
  image(sun, 270, 10, 150, 290);
  image(snow, 30, 10, 70, 570);
  image(snow, 700, 10, 70, 570);
}
