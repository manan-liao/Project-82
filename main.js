var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mouseEvent = "empty";
var last_x,last_y;
color = "black";
lineWidth = 1;
raduis = 40;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent = "mousedown";
    color = document.getElementById("color").value;
    lineWidth = document.getElementById("width").value;
    raduis = document.getElementById("raduis").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.raduis = raduis;
        ctx.arc(current_x,current_y,raduis,0, 2*Math.PI);
        ctx.stroke();
    }
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}