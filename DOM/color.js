var buttons = document.querySelector("button");

buttons.addEventListener("click",function(){
    if(document.body.style.backgroundColor === "purple"){
        document.body.style.backgroundColor = "white";
    }else{
        document.body.style.backgroundColor = "purple";
    }
    
})