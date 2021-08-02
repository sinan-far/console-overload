var mouseevent = "empty";
var lastpositionofx;
var lastpositionofy;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
widthofline = 3;
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    mouseevent = "mousedown";
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouseevent = "mouseup";

}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouseevent = "mouseleave";
}


canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = widthofline;

        console.log("Last position of x and y coordinates =");
        console.log("x = " + lastpositionofx + "y =" + lastpositionofx);
        ctx.moveTo(lastpositionofx, lastpositionofy);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    lastpositionofx = current_position_of_mouse_x;
    lastpositionofy = current_position_of_mouse_y;
}