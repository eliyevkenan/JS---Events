var inp=document.getElementById("exampleInputPassword1")

inp.addEventListener("keyup",function(){
    inputVal(this)
})
inp.addEventListener("keypress",function(){
    inputVal(this)
})

function value(inp){
    for(let i=0; i<inp.value.lenght;i++){
        if(isNaN(inp.value[i])){
            inp.style.borderColor="1px solid red";
            inp.isNaN()=removeEventListener;
            return;
        } else{
            inp.style.borderColor="1px solid black";
        }
    }
}