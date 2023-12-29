function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    frameRate(1); 
  }

  function draw() {
    background(255);
    translate(width / 2, height / 2);

    let hr = hour() % 12;
    let min = minute();
    let sec = second();

    //hour circle
    strokeWeight(5);
    stroke(255, 0, 0); 
    let hrAngle = map(hr, 0, 12, 0, 360);
    arc(0, 0, 200, 200, -90, hrAngle - 90);


    //minute circle
    stroke(0, 255, 0);
    let minAngle = map(min, 0, 60, 0, 360);
    arc(0, 0, 150, 150, -90, minAngle - 90);


    //seconds circle
    stroke(0, 0, 255); 
    let secAngle = map(sec, 0, 60, 0, 360);
    arc(0, 0, 100, 100, -90, secAngle - 90);

    console.log("Minute: " + min);
  }