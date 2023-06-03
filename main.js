function myTouchMove(e)
{
    currentPositionOfTouchX = e.touches[0].clientX = canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY = canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWhidth = whidtOfLine;
    ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouch, currentPositionOfTouchY);
    ctx.stroke();

    lestPositionOfTouchX = currentPositionOfTouchX;
    lestPositionOfTouchY = currentPositionOfTouchY;

}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
    currentPositionOfMouseX = e.clientX = canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY = canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWhidth = whidtOfLine;
    ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouch, currentPositionOfTouchY);
    ctx.stroke();
    }
    lestPositionOfTouchX = currentPositionOfMouseX;
    lestPositionOfTouchY = currentPositionOfMouseY;

}
