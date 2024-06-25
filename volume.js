

// volume of Rectangle------------------------------------------------------------------------------------------------

function calcuateVolOfRectangle() {
    const width = parseFloat(document.getElementById('widthRectVol').value);
    const length = parseFloat(document.getElementById('lengthRectVol').value);
    const height = parseFloat(document.getElementById('heightRectVol').value);
    const volume = parseFloat(document.getElementById('showVolRectangleResult').value);

    const findVOLUMEofRectangle = width * (length * height);
    const findLENGTHVolRectangle = volume / (height * width); 
    const findWIDTHVolRectangle = volume / (height * length); 
    const findHEIGHTVolRectangle = volume / (length * width); 

    if (checkVolumeNumbers(width) && checkVolumeNumbers(length) && checkVolumeNumbers(height)){
        document.getElementById('showVolRectangleResult').value = findVOLUMEofRectangle;
    } 
    if(checkVolumeNumbers(volume) && checkVolumeNumbers(width) && checkVolumeNumbers(height)) {
        document.getElementById('lengthRectVol').value = findLENGTHVolRectangle;
    }
    if(checkVolumeNumbers(volume) && checkVolumeNumbers(length) && checkVolumeNumbers(height)) {
        document.getElementById('widthRectVol').value = findWIDTHVolRectangle;
    }
    if(checkVolumeNumbers(volume) && checkVolumeNumbers(length) && checkVolumeNumbers(width)) {
        document.getElementById('heightRectVol').value = findHEIGHTVolRectangle;
    }
}

// Volume of Sphere-------------------------------------------------------------------------------------------------------

function calculatorVolumeOfSphereFormula() {
    let volume = parseFloat(document.getElementById('sphereVolume').value);
    let radius = parseFloat(document.getElementById('placeSphereRadiusNumber').value);

    if(checkVolumeNumbers(radius)) {
    calculateVolOfSphere(volume, radius);
    }
    else if(checkVolumeNumbers(volume)) {
        calculateRadiusOfSphere(volume, radius);
    }
    else {
        alert("Error: place valid numbers and non negative");
    }
}
function calculateVolOfSphere(volume, radius) {
   volume = (4/3) * Math.PI * Math.pow(radius, 3);
   document.getElementById('sphereVolume').value = volume.toFixed(2);
}
function calculateRadiusOfSphere(volume, radius) {
    radius = Math.pow(volume / ((4/3) * Math.PI), 1/3);    
    document.getElementById('placeSphereRadiusNumber').value = radius.toFixed(2);
}
// volume of Cylinder------------------------------------------------------------------------------------------------

function calculatorVolumeOfCylinderFormula() {
    let volume = parseFloat(document.getElementById('placeCylinderVolume').value);
    let radius = parseFloat(document.getElementById('placeCylinderRadius').value);
    let height = parseFloat(document.getElementById('placeCylinderHeight').value);

    if(checkVolumeNumbers(radius) && checkVolumeNumbers(height)){
        volumeOfCylinderCalculation(volume, radius, height);
    }
    else if(checkVolumeNumbers(volume) && checkVolumeNumbers(height)){
        radiusOfCylinderCalculation(volume, radius, height);
    }
    else if(checkVolumeNumbers(volume) && checkVolumeNumbers(radius)){
        heightOfCylinderCalculation(volume, radius, height);
    }
    else {
        alert("Error: place valid numbers and non negative");
    }
};
function volumeOfCylinderCalculation(volume, radius, height) {
    volume = Math.PI * Math.pow(radius, 2) * height; 
    document.getElementById('placeCylinderVolume').value = volume.toFixed(2);
};
function radiusOfCylinderCalculation(volume, radius, height) {
    radius = Math.sqrt(volume / (Math.PI * height));
    document.getElementById('placeCylinderRadius').value = radius.toFixed(2);
};
function heightOfCylinderCalculation(volume, radius, height) {
    height = volume / (Math.PI * Math.pow(radius, 2));
    document.getElementById('placeCylinderHeight').value = height.toFixed(2);
};

// volume of Cone-----------------------------------------------------------------------------------------------

function calculatorVolumeOfConeFormula(){
    let volume = parseFloat(document.getElementById('coneVolume').value);
    let radius = parseFloat(document.getElementById('coneRadius').value);
    let height = parseFloat(document.getElementById('coneHeight').value);

    if(checkVolumeNumbers(radius) && checkVolumeNumbers(height)){
        volumeOfConeCalculation(volume, radius, height);
    }
    else if(checkVolumeNumbers(volume) && checkVolumeNumbers(height)){
        radiusOfConeCalculation(volume, radius, height);
    }
    else if(checkVolumeNumbers(volume) && checkVolumeNumbers(radius)){
        heightOfConeCalculation(volume, radius, height);
    }
    else {
        alert("Error: place valid numbers and non negative");
    }
};
function volumeOfConeCalculation(volume, radius, height){
    volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    document.querySelector("#coneVolume").value = volume.toFixed(2);
};
function radiusOfConeCalculation(volume, radius, height){
    radius = Math.sqrt(volume * 3 / (Math.PI * height));
    document.querySelector("#coneRadius").value = radius.toFixed(2);
};
function heightOfConeCalculation(volume, radius, height){
    height = (volume * 3) / (Math.PI * Math.pow(radius, 2));
    document.querySelector("#coneHeight").value = height.toFixed(2);
};

//volume of Pyramid---------------------------------------------------------------------------------------------

function calculatorVolumeOfPyramidFormula(){
    let volume = parseFloat(document.getElementById('pyramidVolume').value);
    let height = parseFloat(document.getElementById('pyramidHeight').value);
    let length = parseFloat(document.getElementById('pyramidLength').value);
    let width = parseFloat(document.getElementById('pyramidWidth').value);

    if(checkVolumeNumbers(height) && checkVolumeNumbers(length) && checkVolumeNumbers(width)){
        volumeOfPyramidCalculation(volume, height, length, width);
    }
    else if(checkVolumeNumbers(volume) && checkVolumeNumbers(length) && checkVolumeNumbers(width)){
        heightOfPyramidCalculation(volume, height, length, width);
    }
    else if(checkVolumeNumbers(volume) && checkVolumeNumbers(height) && checkVolumeNumbers(width)){
        lengthOfPyramidCalculation(volume, height, length, width);
    }
    else if(checkVolumeNumbers(volume) && checkVolumeNumbers(height) && checkVolumeNumbers(length)){
        widthOfPyramidCalculation(volume, height, length, width);
    }
    else{
        alert("Error: place valid numbers and non negative");

    }
};
function volumeOfPyramidCalculation(volume, height, length, width){
    volume = (length * width * height) / 3;
    document.getElementById("pyramidVolume").value = volume.toFixed(2);
};
function heightOfPyramidCalculation(volume, height, length, width){
    height = (volume * 3) / (length * width); 
    document.getElementById("pyramidHeight").value = height.toFixed(2);
};
function lengthOfPyramidCalculation(volume, height, length, width){
    length = (volume * 3) / (height * width);
    document.getElementById("pyramidLength").value = length.toFixed(2);
};
function widthOfPyramidCalculation(volume, height, length, width){
    width = (volume * 3) / (height * length);
    document.getElementById("pyramidWidth").value = width.toFixed(2);
};

//refresh the volume boxes----------------------------------------------------------------------------------------

function resetVolumeValues() {
    //Sphere
    document.getElementById('placeSphereRadiusNumber').value = "";
    document.getElementById('sphereVolume').value = "";
    //Cylinder
    document.getElementById('placeCylinderVolume').value = "";
    document.getElementById('placeCylinderRadius').value = "";
    document.getElementById('placeCylinderHeight').value = "";
    //Rectangle
    document.getElementById('widthRectVol').value = "";
    document.getElementById('lengthRectVol').value = "";
    document.getElementById('heightRectVol').value = "";
    document.getElementById('showVolRectangleResult').value = "";
    //Cone
    document.getElementById('coneVolume').value = "";
    document.getElementById('coneRadius').value = "";
    document.getElementById('coneHeight').value = "";
    //Pyramid
    document.getElementById('pyramidVolume').value = "";
    document.getElementById('pyramidHeight').value = "";
    document.getElementById('pyramidLength').value = "";
    document.getElementById('pyramidWidth').value = "";
};

resetVolumeValues();

//validate volume numbers ------------------------------------------------------------------------------------------

function checkVolumeNumbers(value) {
    return !isNaN(value) && value > 0;
};   
function alertInvalidNumbers(){
   if(checkVolumeNumbers(value) == true){
   alert("Error: place valid numbers and non negative");
   }
};
