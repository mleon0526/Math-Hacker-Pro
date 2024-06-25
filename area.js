
//Area of Circle-------------------------------------------------------------------------------------------------------

function calculateAreaOfCircle(){
    let radius = parseFloat(document.getElementById("circleRadius").value);
    let area = parseFloat(document.getElementById("circleArea").value)                                                                                              ;

    if(checkAreaNumbers(radius)){
        areaOfCircle(area, radius);
    }
    else if(checkAreaNumbers(area))
    {
        radiusOfAreaCircle(area, radius);
    }                                                                               
    else {
        alertInvalidAreaNumbers();
    }
};
function areaOfCircle(area, radius){
    area = Math.PI * Math.pow(radius, 2);
    document.getElementById("circleArea").value = area.toFixed(2);

};
function radiusOfAreaCircle(area, radius){
    radius = Math.sqrt(area / Math.PI);
    document.getElementById("circleRadius").value = radius.toFixed(2);
};

//Area of Rectangle----------------------------------------------------------------------------------------------------------

function calculateAreaOfRectangle(){
    let area = parseFloat(document.getElementById("area2DRectangle").value);
    let width = parseFloat(document.getElementById("rectangle2DWidth").value);
    let length = parseFloat(document.getElementById("rectangle2DLength").value);

    if(checkAreaNumbers(width) && checkAreaNumbers(length)){
        areaOfRectangleCalculation(area, width, length);
    }
    else if(checkAreaNumbers(area) && checkAreaNumbers(length)){
        widthOfAreaRectangle(area, width, length);
    }
    else if(checkAreaNumbers(area) && checkAreaNumbers(width)){
        lengthOfAreaRectangle(area, width, length);
    }
    else {
        alertInvalidAreaNumbers();
    }

};
function areaOfRectangleCalculation(area, width, length){
    area = width * length;
    document.getElementById("area2DRectangle").value = area;
};
function widthOfAreaRectangle(area, width, length){
    width = area / length;
    document.getElementById("rectangle2DWidth").value = width;

};
function lengthOfAreaRectangle(area, width, length){
    length = area / width;
    document.getElementById("rectangle2DLength").value = length;
};

//Area of Triangle-----------------------------------------------------------------------------------------------------

function calculateAreaOfTriangle(){
    let area = parseFloat(document.getElementById("areaOfTriangle").value);
    let base = parseFloat(document.getElementById("baseAreaTriangle").value);
    let height = parseFloat(document.getElementById("heightAreaTriangle").value);

    if(checkAreaNumbers(base) && checkAreaNumbers(height)){
        areaOfTriangleCalculation(area, base, height);
    }
    else if(checkAreaNumbers(area) && checkAreaNumbers(height)){
        baseOfTriangleCalculation(area, base, height);
    }
    else if(checkAreaNumbers(area) && checkAreaNumbers(base)){
        heightOfTriangleCalculation(area, base, height);
    }
    else{
        alertInvalidAreaNumbers();
    }
};
function areaOfTriangleCalculation(area, base, height){
    area = (base * height) / 2;
    document.getElementById("areaOfTriangle").value = area.toFixed(2);
};
function baseOfTriangleCalculation(area, base, height){
    base = (area * 2) / height;
    document.getElementById("baseAreaTriangle").value = base.toFixed(2);
};
function heightOfTriangleCalculation(area, base, height){
    height = (area * 2) / base;
    document.getElementById("heightAreaTriangle").value = height;
};

//validate area numbers-----------------------------------------------------------------------------------------------------

function checkAreaNumbers(value){
    return !isNaN(value) && value > 0;
}

function alertInvalidAreaNumbers(){
    alert("Error: place valid numbers and non negative");
}

//reset area values----------------------------------------------------------------------------------------------------------

 function resetAreaValues() {
    //circle
    document.getElementById('circleRadius').value = "";
    document.getElementById('circleArea').value = "";
    //rectangle
    document.getElementById("area2DRectangle").value = "";
    document.getElementById("rectangle2DWidth").value = "";
    document.getElementById("rectangle2DLength").value = "";
    //triangle
    document.getElementById("areaOfTriangle").value = "";
    document.getElementById("baseAreaTriangle").value = "";
    document.getElementById("heightAreaTriangle").value = "";
}

resetAreaValues();  
