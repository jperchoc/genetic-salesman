var genetic;
var MUTATION_CHANCE = 5;
var KEEP_ELITE_PERCENT = 30;
var NB_TOWN = 250;
var POOLSIZE = 40;
var LOOP = true;

var button

function setup() { 
    createCanvas(400, 400);
    genetic = new Genetic(MUTATION_CHANCE, KEEP_ELITE_PERCENT, LOOP);
    init();

    button = createButton('RESET');
    button.position(0, 0);
    button.mousePressed(init);
}
function init() {
    genetic.createSpots(NB_TOWN);
    genetic.createPool(POOLSIZE);
}

function draw() {
    genetic.draw();
    genetic.evolve();
}