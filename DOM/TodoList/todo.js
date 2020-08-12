var lis = document.querySelectorAll("li");

for(var i = 0; i <lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        //so this keyword inside EventListener is referral to the item is triggered on
        //this.style.color = "green"; 
        this.classList.add("seleted");
    });
    
    lis[i].addEventListener("mouseout",function(){
        //this.style.color = "black";
        //so we'll need to remember if we use classlist add then we need to also use remove
        this.classList.remove("seleted");
    });

    lis[i].addEventListener("click",function(){
        this.classList.toggle("done");
    });
}


