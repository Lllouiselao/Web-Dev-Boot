//check off the specific li
$("li").click(function(){
    $(this).toggleClass("completed");

    //if li is grey
    //if ($(this).css("color") === "rgb(128, 128, 128)"){
    //    $(this).css({
    //        color: "black",
    //        textDecoration: "none"
    //})}
    //turn it to black
    //else
    //turn it into grey
    //else{
    //    $(this).css({
    //    color: "grey",
    //    textDecoration: "line-through",
    //})}
    
    //we could use the object to get rid off two lines
    //("color","grey");
    //$(this).css("textDecoration", "line-through");
});

//click on X and delte the todo
$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
        //this is for the parent(li not the span)
        $(this).remove();
    });
    //this event call is for stopping trigger other elemnt outside span
    event.stopPropagation();
});