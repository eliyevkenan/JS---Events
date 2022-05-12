let body = document.querySelector(".body");
let ball = document.querySelector(".ball");
let btn=document.querySelector(".btn")

window.addEventListener("keyup", function (ev) {
  if (ev.key == "ArrowDown") {
      
    ball.style.top = Number(parseInt(ball.style.top)) + 20 + "px";
  }
  if (ev.key == "ArrowUp") {
      
    ball.style.bottom = Number(parseInt(ball.style.bottom)) + 20 + "px";
  }
  if (ev.key == "ArrowRight") {
       
    ball.style.left = Number(parseInt(ball.style.left)) + 20 + "px";
  }
  if (ev.key == "ArrowLeft") { 
      
    ball.style.right = Number(parseInt(ball.style.right)) + 20 + "px";
  }
});

btn.forEach(Element=>Element.onclick=function(){
    this.nextElemenetSibling.style.margin="margin(200px 275px 0)";
    this.style.display="none";
})


