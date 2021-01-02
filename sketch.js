var gameState = 0;
var form, player, game;
var database, playerCount;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    form = new Form();
    form.display();
}

function draw(){
    background("white");

    drawSprites();    
}