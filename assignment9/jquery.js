"use strict"
var text = ["Kaias", "Pedro", "Hotfoot", "Penelope"];

$(document).ready(function() {


    $("#clickable1").click(function(e) {
        for (var counter = 1; counter <= 10; counter++) {
            console.log(counter)
        }

    });


    $("#clickable2").click(function(e) {
        for (var counter = 0; counter < text.length; counter = counter + 1) {
            console.log(text[counter]);
        }


    });

    $("#clickable3").click(function(e) {
        var car = {
            doors: 4,
            honk: function() {

                console.log("Honk!");
                console.log(car);
            }

        }
        car.honk();

    });

    $.each(["Kaias", "Pedro", "Hotfoot", "Penelope"], function(i, l) {
        alert("Index #" + i + ": " + l);
    });


    $("h1").hover(function() {
        $(this).toggleClass("changeToPurple");
    });

});