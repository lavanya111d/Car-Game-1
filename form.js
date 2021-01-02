class Form{ 
 contructor(){

 }

 display(){
    var title = createElement('h3')
    title.html("MULTI-PLAYER CAR RACING GAME!")
    title.position(130,0);

    var input = createInput('Name')
    input.position(130,160);

    var button = createButton("Play")
    button.position(250,200);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();

        var greeting = createElement('h2')
        greeting.html("Hello! " + name);
        greeting.position(130,160);
    })
 }
}