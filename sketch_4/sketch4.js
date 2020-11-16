
let img;

function preload() {
	img = loadImage('joji.png');
}

function setup() {
	createCanvas(1200,1200);

}

function draw() {
	background(220);
	image(img, 0, 0)
	noLoop();
}