var character = 200 ;
console.log("jj")
$(document).ready(
    function(){
    console.log($("#character"));
    $("#text").keyup(function(){
        console.log("Input");
     
    });

    function wordCount( val ){
        var wom = val.match(/\S+/g);
        return {
            characters : val.length,
        };
    };


    var textarea = document.getElementById("text");
    var character = document.getElementById("character");
    textarea.addEventListener("input", function(){
        var v = wordCount( this.value );
        character.innerHTML = (
            200 - v.characters       
        );
    }, false);
})