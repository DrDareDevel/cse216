/**
 * Created by sean on 5/29/17.
 */

function redraw()
{
    var Total = 0;
	Total = Total + (document.getElementById("hvac").value)*10;
	document.getElementById("Total").value = Total;
	draw(Total);
}

function draw(speed)
{
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width, canvas.height);
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = canvas.height / 2 - 20;

    context.beginPath();
    context.arc(centerX, centerY, radius, Math.PI*0.1, Math.PI*-1.1, true);

    var gradience = context.createRadialGradient(centerX, centerY, radius-radius/2, centerX, centerY, radius-radius/8);
    gradience.addColorStop(0, '#ff9000');
    gradience.addColorStop(1, '#000000');

    context.fillStyle = gradience;
    context.fill();
    context.closePath();
    context.restore();

    context.beginPath();
    context.strokeStyle = '#ffff00';
    context.translate(centerX,centerY);
    var increment = 3;
    context.font="15px Helvetica";
    for (var i=-18; i<=18; i++)
    {
        var angle = Math.PI/30*i;
        var sineAngle = Math.sin(angle);
        var cosAngle = -Math.cos(angle);

        if (i % 5 == 0) {
            context.lineWidth = 8;
            var iPointX = sineAngle *(radius -radius/4);
            var iPointY = cosAngle *(radius -radius/4);
            var oPointX = sineAngle *(radius -radius/7);
            var oPointY = cosAngle *(radius -radius/7);

            var wPointX = sineAngle *(radius -radius/2.5);
            var wPointY = cosAngle *(radius -radius/2.5);
            context.fillText((i+18)*increment,wPointX-2,wPointY+4);
        }
        else
        {
            context.lineWidth = 2;
            iPointX = sineAngle *(radius -radius/5.5);
            iPointY = cosAngle *(radius -radius/5.5);
            oPointX = sineAngle *(radius -radius/7);
            oPointY = cosAngle *(radius -radius/7);
        }
        context.beginPath();
        context.moveTo(iPointX,iPointY);
        context.lineTo(oPointX,oPointY);
        context.stroke();
        context.closePath();
    }
    var numOfSegments = speed/increment;
    var numOfSegmentsForLimit = 100.0/increment;
    numOfSegments = numOfSegments -18;
    numOfSegmentsForLimit = numOfSegmentsForLimit -18
    angle = Math.PI/30*numOfSegments;
    sineAngle = Math.sin(angle);
    cosAngle = -Math.cos(angle);
    var pointX = sineAngle *(3/4*radius);
    var pointY = cosAngle *(3/4*radius);
    angleLimit = Math.PI/30*numOfSegmentsForLimit;
    sineAngleLimit = Math.sin(angleLimit);
    cosAngleLimit = -Math.cos(angleLimit);
    var pointXLimit = sineAngleLimit *radius;
    var pointYLimit = cosAngleLimit *radius;

    context.beginPath();
    context.strokeStyle = '#000000';
    context.arc(0, 0, 19, 0, 2*Math.PI, true);
    context.fill();
    context.closePath();

    context.beginPath();
    context.lineWidth=6;
    context.moveTo(0,0);
    context.lineTo(pointX,pointY);
    context.stroke();
    context.closePath();
    // context.restore();
    // context.translate(-centerX,-centerY);

    context.beginPath();
    context.strokeStyle = '#FF0000';
    context.lineWidth=6;
    context.moveTo(0,0);
    context.lineTo(pointXLimit,pointYLimit);
    context.stroke();
    context.closePath();
    context.restore();
    context.translate(-centerX,-centerY);
}
