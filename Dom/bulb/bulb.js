var a=document.querySelector("#bulb")
var b=document.querySelector("button")

var c=0;
b.addEventListener("click",()=>{
    if(c==0){
        a.style.backgroundColor="yellow"
        c=1;
        b.innerHTML="OFF"
    }    
    else{
        a.style.backgroundColor="darkkhaki"
        c=0;
        b.innerHTML="ON"

    } 
})