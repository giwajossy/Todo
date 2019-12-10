// old lengthy way to toggle strike-through effect

/* $("li").on("click",function(){
    
    // checks if color is gray
    if($(this).css("color") === "rgb(128, 128, 128)")
    {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }

    // if color isnt gray
    else
    {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
      
}); */

// smarter way to toggle the completed class with effects

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed"); 
});

$("ul").on("click", "span", function(event){
    // removes the parent li tag if span is clicked
    $(this).closest("li").fadeOut(1000, function(){
        // removing ul tag after fading
        $(this).closest("li").remove();
    });
    //stops event bubbling
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    // enter key is pressed
    if(event.which === 13)
    {
        // storing input text
        let todo= $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class="fas fa-trash-alt fa-lg"></i></span>'+todo+'</li>');
    }
});