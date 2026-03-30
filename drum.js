for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var click = this.innerHTML;
        sound(click);
    });

}

document.addEventListener("keydown", function(event){
    sound(event.key);
});

function sound(hero){

    switch(hero){

        case "a":
            new Audio("tom-4.mp3").play();
            break;

        case "s":
            new Audio("tom-1.mp3").play();
            break;

        case "d":
            new Audio("snare.mp3").play();
            break;

        case "f":
            new Audio("tom-2.mp3").play();
            break;

        case "j":
            new Audio("kick-bass.mp3").play();
            break;

        case "k":
            new Audio("tom-3.mp3").play();
            break;

        case "l":
            new Audio("crash.mp3").play();
            break;

        default:
            console.log("No sound");

    }

}