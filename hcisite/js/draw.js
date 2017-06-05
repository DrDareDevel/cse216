/**
 * Created by sean on 5/29/17.
 */

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

function necxtweek()
{
    document.getElementById("total").value = parseFloat(document.getElementById("newTotal").value) + Math.random()*10 - 5;
}

function loadup()
{
    var total = parseFloat(document.getElementById("total").value);
    var day = document.getElementById("day").value;
	var season = document.getElementById("season").value;
    var stove_h = parseFloat(document.getElementById("stove_h").value);
    var micro_h = parseFloat(document.getElementById("micro_h").value);
    var tv_h = parseFloat(document.getElementById("tv_h").value);
    var hvac_h = parseFloat(document.getElementById("hvac_h").value);
    var hvac_set = parseFloat(document.getElementById("hvac_set").value);
    var wh_h = parseFloat(document.getElementById("wh_h").value);
    var wh_set = parseFloat(document.getElementById("wh_set").value);
    var bath_n = parseFloat(document.getElementById("bath_n").value);
    var wash_n = parseFloat(document.getElementById("wash_n").value);
	var estimate = 0.0;

    var hasTotal = getQueryVariable("total");
    if (hasTotal != false) {
        total = parseFloat(hasTotal);
    }
    document.getElementById("total").value = total.toFixed(2);

    var hasDay = getQueryVariable("nextDay");
    if (hasDay != false){
        day = parseInt(hasDay);
    }
    document.getElementById("day").value = day;
    document.getElementById("nextDay").value = parseInt(day)+7;

    var hasStove_h = getQueryVariable("stove_h");
    if (hasStove_h != false) {
        stove_h = parseInt(hasStove_h);
    }
    document.getElementById("stove_h").value = stove_h;

    var hasHicro_h = getQueryVariable("micro_h");
    if (hasHicro_h != false) {
        micro_h = parseInt(hasHicro_h);
    }
    document.getElementById("micro_h").value = micro_h;

    var hasTv_h = getQueryVariable("tv_h");
    if (hasTv_h != false) {
        tv_h = parseInt(hasTv_h);
    }
    document.getElementById("tv_h").value = tv_h;

    var hasHvac_h = getQueryVariable("hvac_h");
    if (hasHvac_h != false) {
        hvac_h = parseInt(hasHvac_h);
    }
    document.getElementById("hvac_h").value = hvac_h;

    var hasHvac_set = getQueryVariable("hvac_set");
    if (hasHvac_set != false) {
        hvac_set = parseInt(hasHvac_set);
    }
    document.getElementById("hvac_set").value = hvac_set;

    var hasWh_h = getQueryVariable("wh_h");
    if (hasWh_h != false) {
        wh_h = parseInt(hasWh_h);
    }
    document.getElementById("wh_h").value = wh_h;

    var hasWh_set = getQueryVariable("wh_set");
    if (hasWh_set != false) {
        wh_set = parseInt(hasWh_set);
    }
    document.getElementById("wh_set").value = wh_set;

    var hasBath_n = getQueryVariable("bath_n");
    if (hasBath_n != false) {
        bath_n = parseInt(hasBath_n);
    }
    document.getElementById("bath_n").value = bath_n;

    var hasWash_n = getQueryVariable("wash_n");
    if (hasWash_n != false) {
        wash_n = parseInt(hasWash_n);
    }
    document.getElementById("wash_n").value = wash_n;

    var cost = parseFloat(document.getElementById("price").value)/1000.0;

    var budget = parseFloat(document.getElementById("budget").value);
    var hasBudget = getQueryVariable("budget");
    if (hasBudget != false) {
        budget = parseFloat(hasBudget);
    }
    document.getElementById("budget").value = budget;

    var outside_temp = 86.0;
    var newTotal = 0.0;
    newTotal = newTotal+1500*stove_h*cost;
    newTotal = newTotal+1500*micro_h*cost;
    newTotal = newTotal+234*tv_h*cost;
	if(season === "Summer"){
		newTotal = newTotal+(hvac_h/24.0)*(((5.76*((outside_temp-32.0)/1.8))-100.12)+(((5.76*((outside_temp-32.0)/1.8))-100.12)*(23.9-((hvac_set-32.0)/1.8)))/5.0)*1000.0*cost;
    }
	else {
		newTotal = newTotal+(hvac_h/24.0)*(((-0.7*((59-32.0)/1.8))+16.84)+(((-0.7*((59-32.0)/1.8))+16.84)*(((hvac_set-32.0)/1.8)-21.1))/5.0)*1000.0*cost;
	}
	newTotal = newTotal+(333.6*(wh_set-50)*0.000293*99/100*1000/40)*cost;
    newTotal = newTotal+(333.6*(wh_set-50)*0.000293*99/100*1000/40)*cost*15*bath_n;
    newTotal = newTotal+(333.6*(wh_set-50)*0.000293*99/100*1000/40)*cost*7*wash_n;
	estimate = newTotal*(35-day)+total;
    newTotal = newTotal*7+total;

    document.getElementById("newTotal").value = newTotal;
    draw(estimate,budget);
}

function redraw()
{
    var total = parseFloat(document.getElementById("total").value);
    var stove_h = parseFloat(document.getElementById("stove_h").value);
    var micro_h = parseFloat(document.getElementById("micro_h").value);
    var tv_h = parseFloat(document.getElementById("tv_h").value);
    var hvac_h = parseFloat(document.getElementById("hvac_h").value);
    var hvac_set = parseFloat(document.getElementById("hvac_set").value);
    var wh_h = parseFloat(document.getElementById("wh_h").value);
    var wh_set = parseFloat(document.getElementById("wh_set").value);
    var bath_n = parseFloat(document.getElementById("bath_n").value);
    var wash_n = parseFloat(document.getElementById("wash_n").value);
    var cost = parseFloat(document.getElementById("price").value)/1000.0;
    var budget = parseFloat(document.getElementById("budget").value);
    var outside_temp = 86.0;
	var season = document.getElementById("season").value;
	var day = document.getElementById("day").value;
	var estimate;

    var newTotal = 0.0;
    newTotal = newTotal+1500.0*stove_h*cost;
    newTotal = newTotal+1500.0*micro_h*cost;
    newTotal = newTotal+234.0*tv_h*cost;
    if(season === "Summer"){
		newTotal = newTotal+(hvac_h/24.0)*(((5.76*((outside_temp-32.0)/1.8))-100.12)+(((5.76*((outside_temp-32.0)/1.8))-100.12)*(23.9-((hvac_set-32.0)/1.8)))/5.0)*1000.0*cost;
    }
	else {
		newTotal = newTotal+(hvac_h/24.0)*(((-0.7*((59-32.0)/1.8))+16.84)+(((-0.7*((59-32.0)/1.8))+16.84)*(((hvac_set-32)/1.8)-21.1))/5.0)*1000*cost;
	}
	newTotal = newTotal+(333.6*(wh_set-50)*0.000293*99/100*1000/40)*cost;
    newTotal = newTotal+(333.6*(wh_set-50)*0.000293*99/100*1000/40)*cost*15*bath_n;
    newTotal = newTotal+(333.6*(wh_set-50)*0.000293*99/100*1000/40)*cost*7*wash_n;
	estimate = newTotal*(35-day)+total;
    newTotal = newTotal*7+total;

    document.getElementById("newTotal").value = newTotal;
    draw(estimate,budget);
}

function draw(speed,budget)
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
    var increment = 5;
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
    var numOfSegmentsForLimit = budget/increment;
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
