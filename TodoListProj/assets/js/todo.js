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
})