var trackImg, track;
var runner_Animation, runner;
var Left_boundary, Right_boundary;

function preload() {
  //pre-load images
  trackImg = loadImage("path.png");
  runner_Animation = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  track = createSprite(200, 200);
  track.addImage(trackImg);
  track.velocityY = 4;
  track.scale = 1.2;

  runner = createSprite(50, 310, 20, 150);
  runner.addAnimation("RUNNER", runner_Animation);
  runner.scale = 0.1;

  Right_boundary = createSprite(395, 310, 5, 150);
  Right_boundary.visible = false;
  Left_boundary = createSprite(10, 310, 10, 150);
  Left_boundary.visible = false;
}

function draw() {
  background(0);
  if (track.y > 400) {
    track.y = height / 2;
  }
  runner.x = World.mouseX;
  runner.collide(Left_boundary);
  runner.collide(Right_boundary);

  drawSprites();

}
