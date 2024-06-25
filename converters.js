// Length Converter--------------------------------------------------------------------------------------------
function setLengthValues(){
    // Get references to the input elements
    const placeLengthInput = document.getElementById("placeLength");
    const selectLengthInput = document.getElementById("selectLength");
    const typeOfResultInput = document.getElementById("typeOfResult");
    const lengthResultInput = document.getElementById("lengthResult");
    
    // Add event listeners to all relevant input elements
    placeLengthInput.addEventListener("input", convertLengths);
    selectLengthInput.addEventListener("change", convertLengths);
    typeOfResultInput.addEventListener("change", convertLengths);
    
    // Initial conversion
    convertLengths();
    resetConverterValues();
}
//    
function convertLengths(){
        const selectLengthUnit = document.getElementById("selectLength").value;
        const convertToLengthUnit = document.getElementById("typeOfResult").value;
        const placedLengthNumber = parseFloat(document.getElementById("placeLength").value);
        let result;
    
        switch (selectLengthUnit) {

          case 'mm': 
          result = convertFromMilimeters(placedLengthNumber, convertToLengthUnit);
          break;
 
          case 'cm': 
          result = convertFromCentimeters(placedLengthNumber, convertToLengthUnit);
          break;
    
          case 'm':
          result = convertFromMeters(placedLengthNumber, convertToLengthUnit);
          break;
          
          case 'km':
          result = convertFromKilometers(placedLengthNumber, convertToLengthUnit);
          break;
    
          case 'mi':
            result = convertFromMiles(placedLengthNumber, convertToLengthUnit);
            break;
            
          case 'in':
            result = convertFromInches(placedLengthNumber, convertToLengthUnit);
            break;
            
          case 'ft':
            result = convertFromFeet(placedLengthNumber, convertToLengthUnit);
            break;
                    
          case 'yd':
            result = convertFromYards(placedLengthNumber, convertToLengthUnit);
            break;
    
          default:
            alert("Unsupported length unit");
            break;
    
        }
    
        document.getElementById("lengthResult").value = result;
}

function swapLengthUnits() {
    const selectLength = document.getElementById("selectLength");
    const typeOfResult = document.getElementById("typeOfResult");

    const currentSelectLengthValue = selectLength.value;
    const currentTypeOfResultValue = typeOfResult.value;

    //swap
    selectLength.value = currentTypeOfResultValue;
    typeOfResult.value = currentSelectLengthValue;

    convertLengths()
}

document.getElementById("lengthConverterButton").addEventListener("click", swapLengthUnits);

setLengthValues();
//
function convertFromMilimeters(placedLengthNumber, convertToLengthUnit) {
    switch (convertToLengthUnit) {
        case 'mm':
            return placedLengthNumber;
            break;

        case 'cm':
            return placedLengthNumber / 10;
            break;

        case 'm':
            return placedLengthNumber / 1000;
            break;

        case 'km':
            return placedLengthNumber / 1000000;
            break;

        case 'mi':
            return placedLengthNumber / 1609344;
            break;

        case 'in':
            return placedLengthNumber / 25.4;
            break;

        case 'ft':
            return placedLengthNumber / 304.8;
            break;

        case 'yd':
            return placedLengthNumber / 914.4;
            break;

        default:
            alert("Error");
            break;
    }
}
//
function convertFromCentimeters(placedLengthNumber, convertToLengthUnit) {
    switch (convertToLengthUnit) {
        case 'mm':
            return placedLengthNumber * 10;  // Conversion to millimeters
            break;

        case 'cm':
            return placedLengthNumber;
            break;

        case 'm': 
            return placedLengthNumber / 100;
            break;
        
        case 'km': 
            return placedLengthNumber / 100000;
            break;
        
        case 'mi': 
            return placedLengthNumber / 160934.4;
            break;
        
        case 'in': 
            return placedLengthNumber / 2.54;
            break;
        
        case 'ft': 
            return placedLengthNumber / 30.48;
            break;
        
        case 'yd': 
            return placedLengthNumber / 91.44;
            break;

        default: 
            alert("Error");
            break;
    }
}
//
function convertFromMeters(placedLengthNumber, convertToLengthUnit) {
    switch (convertToLengthUnit) {
        case 'mm':
            return placedLengthNumber * 1000;  // Conversion to millimeters
            break;

        case 'm':
            return placedLengthNumber;
            break;

        case 'cm': 
            return placedLengthNumber * 100;
            break;
        
        case 'km': 
            return placedLengthNumber / 1000;
            break;
        
        case 'mi': 
            return placedLengthNumber / 1609.34;
            break;
        
        case 'in': 
            return placedLengthNumber * 39.3701;
            break;
        
        case 'ft': 
            return placedLengthNumber * 3.28084;
            break;
        
        case 'yd': 
            return placedLengthNumber * 1.09361;
            break;

        default: 
            alert("Error");
            break;
    }
}
//
function convertFromKilometers(placedLengthNumber, convertToLengthUnit) {
    switch (convertToLengthUnit) {
        case 'mm':
            return placedLengthNumber * 1000000;  // Conversion to millimeters
            break;

        case 'cm':
            return placedLengthNumber * 100000;
            break;

        case 'm': 
            return placedLengthNumber * 1000;
            break;
        
        case 'km': 
            return placedLengthNumber;
            break;
        
        case 'mi': 
            return placedLengthNumber * 0.621371;
            break;
        
        case 'in': 
            return placedLengthNumber * 39370.1;
            break;
        
        case 'ft': 
            return placedLengthNumber * 3280.84;
            break;
        
        case 'yd': 
            return placedLengthNumber * 1093.61;
            break;

        default: 
            alert("Error");
            break;
    }
}
//
function convertFromMiles(placedLengthNumber, convertToLengthUnit) {
    switch (convertToLengthUnit) {
        case 'mm':
            return placedLengthNumber * 1609344;  // Conversion to millimeters
            break;

        case 'cm':
            return placedLengthNumber * 160934.4;
            break;

        case 'm': 
            return placedLengthNumber * 1609.34;
            break;
        
        case 'km': 
            return placedLengthNumber * 1.60934;
            break;
        
        case 'mi': 
            return placedLengthNumber;
            break;
        
        case 'in': 
            return placedLengthNumber * 63360;
            break;
        
        case 'ft': 
            return placedLengthNumber * 5280;
            break;
        
        case 'yd': 
            return placedLengthNumber * 1760;
            break;

        default: 
            alert("Error");
            break;
    }
}
//
function convertFromInches(placedLengthNumber, convertToLengthUnit) {
    switch (convertToLengthUnit) {
        case 'mm':
            return placedLengthNumber * 25.4;  // Conversion to millimeters
            break;

        case 'cm':
            return placedLengthNumber * 2.54;
            break;

        case 'm': 
            return placedLengthNumber / 39.3701;
            break;
        
        case 'km': 
            return placedLengthNumber * 0.0000254;
            break;
        
        case 'mi': 
            return placedLengthNumber / 63360;
            break;
        
        case 'in': 
            return placedLengthNumber;
            break;
        
        case 'ft': 
            return placedLengthNumber / 12;
            break;
        
        case 'yd': 
            return placedLengthNumber / 36;
            break;

        default: 
            alert("Error");
            break;
    }
}
//
function convertFromFeet(placedLengthNumber, convertToLengthUnit) {
    switch (convertToLengthUnit) {
        case 'mm':
            return placedLengthNumber * 304.8;  // Conversion to millimeters
            break;

        case 'cm':
            return placedLengthNumber * 30.48;
            break;

        case 'm': 
            return placedLengthNumber * 0.3048;
            break;
        
        case 'km': 
            return placedLengthNumber / 3280.84;
            break;
        
        case 'mi': 
            return placedLengthNumber / 5280;
            break;
        
        case 'in': 
            return placedLengthNumber * 12;
            break;
        
        case 'ft': 
            return placedLengthNumber;
            break;
        
        case 'yd': 
            return placedLengthNumber / 3;
            break;

        default: 
            alert("Error");
            break;
    }
}
//
function convertFromYards(placedLengthNumber, convertToLengthUnit) {
    switch (convertToLengthUnit) {
        case 'mm':
            return placedLengthNumber * 914.4;  // Conversion to millimeters
            break;

        case 'cm':
            return placedLengthNumber * 91.44;
            break;

        case 'm': 
            return placedLengthNumber * 0.9144;
            break;
        
        case 'km': 
            return placedLengthNumber / 1093.61;
            break;
        
        case 'mi': 
            return placedLengthNumber / 1760;
            break;
        
        case 'in': 
            return placedLengthNumber * 36;
            break;
        
        case 'ft': 
            return placedLengthNumber * 3;
            break;
        
        case 'yd': 
            return placedLengthNumber;
            break;

        default: 
            alert("Error");
            break;
    }
}
//Time Converter-----------------------------------------------------------------------------------------------

function setTimeValues(){
    // Get references to the input elements
    const placeTimeNumber = document.getElementById("chosenTime");
    const SelectTimeUnit  = document.getElementById("selectTime");
    const typeOfTimeUnitConverter = document.getElementById("typeOfTimeResult");
    const timeResultInput  = document.getElementById("timeResult");
    
    // Add event listeners to all relevant input elements
    placeTimeNumber.addEventListener("input", convertTimeUnits);
    SelectTimeUnit.addEventListener("change", convertTimeUnits);
    typeOfTimeUnitConverter.addEventListener("change", convertTimeUnits);
    
    // Initial conversion
    convertTimeUnits();
    resetConverterValues();
}
    
function convertTimeUnits(){
        const chosenTimeNumber = parseFloat(document.getElementById("chosenTime").value);
        const chosenTimeUnit = document.getElementById("selectTime").value;
        const convertToTimeUnit = document.getElementById("typeOfTimeResult").value;
        let result;
    
        switch (chosenTimeUnit) {
          case 'nanoSeconds':
            result = convertFromNanoSeconds(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;
          case 'microSeconds':
            result = convertFromMicroSeconds(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;
          case 'miliSeconds':
            result = convertFromMiliSeconds(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;
          case 'centiSeconds':
            result = convertFromCentiSeconds(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;
          case 'seconds':
            result = convertFromSeconds(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;
          case 'minutes':
            result = convertFromMinutes(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;
          case 'hours':
            result = convertFromHours(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;
          case 'days':
            result = convertFromDays(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;
          case 'weeks':
            result = convertFromWeeks(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;
          case 'months':
            result = convertFromMonths(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;
          case 'years':
            result = convertFromYears(chosenTimeNumber, convertToTimeUnit).toFixed(4);
            break;               
          default:
            alert("Unsupported time unit");
            break;
        }
    
        document.getElementById("timeResult").value = result;
}

function swapTimeUnits() {
    const selectTime = document.getElementById("selectTime");
    const typeOfTimeResult = document.getElementById("typeOfTimeResult");

    const currentSelectTime = selectTime.value;
    const currentTypeOfTimeResult = typeOfTimeResult.value;

    //swap
    selectTime.value = currentTypeOfTimeResult;
    typeOfTimeResult.value = currentSelectTime;

    convertTimeUnits();
}

document.getElementById("timeConverterButton").addEventListener("click", swapTimeUnits);

setTimeValues();
     
function convertFromNanoSeconds(chosenTimeNumber, convertToTimeUnit){
        switch (convertToTimeUnit) {
            case 'nanoSeconds':
            return chosenTimeNumber;
            break;
            
            case 'microSeconds': 
            return chosenTimeNumber / 1000;
            break;
            
            case 'miliSeconds': 
            return chosenTimeNumber / 1000000;
            break;
            
            case 'centiSeconds': 
            return chosenTimeNumber / 10000000;
            break;
            
            case 'seconds': 
            return chosenTimeNumber / 1000000000;
            break;
            
            case 'minutes': 
            return chosenTimeNumber / 60000000000;
            break;
            
            case 'hours': 
            return chosenTimeNumber / 3600000000000;
            break;
            
            case 'days': 
            return chosenTimeNumber / 86400000000000;
            break;
            
            case 'weeks': 
            return chosenTimeNumber / 604800000000000;
            break;
            
            case 'months': 
            return chosenTimeNumber / 2629743836400000;
            break;
            
            case 'years': 
            return chosenTimeNumber / 31556926000000000;
            break;
            
            default:
            alert("Unsupported time unit");
            break;
        }
}
//
function convertFromMicroSeconds(chosenTimeNumber, convertToTimeUnit){
        switch (convertToTimeUnit) {
            case 'nanoSeconds':
            return chosenTimeNumber * 1000;
            break;
            
            case 'microSeconds': 
            return chosenTimeNumber;
            break;
            
            case 'miliSeconds': 
            return chosenTimeNumber / 1000;
            break;
            
            case 'centiSeconds': 
            return chosenTimeNumber / 10000;
            break;
            
            case 'seconds': 
            return chosenTimeNumber / 1000000;
            break;
            
            case 'minutes': 
            return chosenTimeNumber / 60000000;
            break;
            
            case 'hours': 
            return chosenTimeNumber / 3600000000;
            break;
            
            case 'days': 
            return chosenTimeNumber / 86400000000;
            break;
            
            case 'weeks': 
            return chosenTimeNumber / 604800000000;
            break;
            
            case 'months': 
            return chosenTimeNumber / 262974383640;
            break;
            
            case 'years': 
            return chosenTimeNumber / 31556926000000;
            break;
            
            default:
            alert("Unsupported time unit");
            break;
        }
    }
//
function convertFromMiliSeconds(chosenTimeNumber, convertToTimeUnit){
    switch (convertToTimeUnit) {
        case 'nanoSeconds':
        return chosenTimeNumber * 1000000;
        break;
        
        case 'microSeconds': 
        return chosenTimeNumber * 1000; 
        break;
        
        case 'miliSeconds': 
        return chosenTimeNumber; 
        
        case 'centiSeconds': 
        return chosenTimeNumber / 10; 
        
        case 'seconds': 
        return chosenTimeNumber / 1000; 
        
        case 'minutes': 
        return chosenTimeNumber / 60000; 
        
        case 'hours': 
        return chosenTimeNumber / 3600000; 
        
        case 'days': 
        return chosenTimeNumber / 86400000; 
        
        case 'weeks': 
        return chosenTimeNumber / 604800000; 
        
        case 'months': 
        return chosenTimeNumber / 2629743836; 
        
        case 'years': 
        return chosenTimeNumber / 31556926000; 
        
        default:
        alert("Unsupported time unit");
    }
}
//
function convertFromCentiSeconds(chosenTimeNumber, convertToTimeUnit){
    switch (convertToTimeUnit) {
        case 'nanoSeconds':
        return chosenTimeNumber * 100000;
        break;
        
        case 'microSeconds': 
        return chosenTimeNumber * 10000; 
        break;
        
        case 'miliSeconds': 
        return chosenTimeNumber * 100; 
        
        case 'centiSeconds': 
        return chosenTimeNumber; 
        
        case 'seconds': 
        return chosenTimeNumber / 100; 
        
        case 'minutes': 
        return chosenTimeNumber / 6000; 
        
        case 'hours': 
        return chosenTimeNumber / 360000; 
        
        case 'days': 
        return chosenTimeNumber / 8640000; 
        
        case 'weeks': 
        return chosenTimeNumber / 60480000; 
        
        case 'months': 
        return chosenTimeNumber / 2629743836; 
        
        case 'years': 
        return chosenTimeNumber / 3155692600; 
        
        default:
        alert("Unsupported time unit");
    }
}
//
function convertFromSeconds(chosenTimeNumber, convertToTimeUnit){
    switch (convertToTimeUnit) {
        case 'nanoSeconds':
        return chosenTimeNumber * 1000000000;
        break;
        case 'microSeconds': 
        return chosenTimeNumber * 1000000; 
        break;
        case 'miliSeconds': 
        return chosenTimeNumber * 1000; 
        case 'centiSeconds': 
        return chosenTimeNumber * 100; 
        case 'seconds': 
        return chosenTimeNumber; 
        case 'minutes': 
        return chosenTimeNumber / 60; 
        case 'hours': 
        return chosenTimeNumber / 3600; 
        case 'days': 
        return chosenTimeNumber / 86400; 
        case 'weeks': 
        return chosenTimeNumber / 604800; 
        case 'months': 
        return chosenTimeNumber / 2629743.83; 
        case 'years': 
        return chosenTimeNumber / 31556926; 
        default:
        alert("Unsupported time unit");
    }
}
//
function convertFromMinutes(chosenTimeNumber, convertToTimeUnit){
    switch (convertToTimeUnit) {
        case 'nanoSeconds':
        return chosenTimeNumber * 60000000000;
        break;
        case 'microSeconds': 
        return chosenTimeNumber * 60000000; 
        break;
        case 'miliSeconds': 
        return chosenTimeNumber * 60000; 
        case 'centiSeconds': 
        return chosenTimeNumber * 6000; 
        case 'seconds': 
        return chosenTimeNumber * 60; 
        case 'minutes': 
        return chosenTimeNumber; 
        case 'hours': 
        return chosenTimeNumber / 60; 
        case 'days': 
        return chosenTimeNumber / 1440; 
        case 'weeks': 
        return chosenTimeNumber / 10080; 
        case 'months': 
        return chosenTimeNumber / 43800; 
        case 'years': 
        return chosenTimeNumber / 525600; 
        default:
        alert("Unsupported time unit");
    }
}
//
function convertFromHours(chosenTimeNumber, convertToTimeUnit){
    switch (convertToTimeUnit) {
        case 'nanoSeconds':
        return chosenTimeNumber * 3600000000000;
        break;
        case 'microSeconds': 
        return chosenTimeNumber * 3600000000; 
        break;
        case 'miliSeconds': 
        return chosenTimeNumber * 3600000; 
        case 'centiSeconds': 
        return chosenTimeNumber * 360000; 
        case 'seconds': 
        return chosenTimeNumber * 3600; 
        case 'minutes': 
        return chosenTimeNumber * 60; 
        case 'hours': 
        return chosenTimeNumber; 
        case 'days': 
        return chosenTimeNumber / 24; 
        case 'weeks': 
        return chosenTimeNumber / 168; 
        case 'months': 
        return chosenTimeNumber / 730; 
        case 'years': 
        return chosenTimeNumber / 8760; 
        default:
        alert("Unsupported time unit");
    }
}
//
function convertFromDays(chosenTimeNumber, convertToTimeUnit){
    switch (convertToTimeUnit) {
        case 'nanoSeconds':
        return chosenTimeNumber * 86400000000000;
        break;
        case 'microSeconds': 
        return chosenTimeNumber * 86400000000; 
        break;
        case 'miliSeconds': 
        return chosenTimeNumber * 86400000; 
        case 'centiSeconds': 
        return chosenTimeNumber * 8640000; 
        case 'seconds': 
        return chosenTimeNumber * 86400; 
        case 'minutes': 
        return chosenTimeNumber * 1440; 
        case 'hours': 
        return chosenTimeNumber * 24; 
        case 'days': 
        return chosenTimeNumber; 
        case 'weeks': 
        return chosenTimeNumber / 7; 
        case 'months': 
        return chosenTimeNumber / 30.417; 
        case 'years': 
        return chosenTimeNumber / 365; 
        default:
        alert("Unsupported time unit");
    }
}
//
function convertFromWeeks(chosenTimeNumber, convertToTimeUnit){
    switch (convertToTimeUnit) {
        case 'nanoSeconds':
        return chosenTimeNumber * 604800000000000;
        break;
        case 'microSeconds': 
        return chosenTimeNumber * 604800000000; 
        break;
        case 'miliSeconds': 
        return chosenTimeNumber * 604800000; 
        case 'centiSeconds': 
        return chosenTimeNumber * 60480000; 
        case 'seconds': 
        return chosenTimeNumber * 604800; 
        case 'minutes': 
        return chosenTimeNumber * 10080; 
        case 'hours': 
        return chosenTimeNumber * 168; 
        case 'days': 
        return chosenTimeNumber * 7; 
        case 'weeks': 
        return chosenTimeNumber; 
        case 'months': 
        return chosenTimeNumber / 4.345; 
        case 'years': 
        return chosenTimeNumber / 52.143; 
        default:
        alert("Unsupported time unit");
    }
}
//
function convertFromMonths(chosenTimeNumber, convertToTimeUnit){
    switch (convertToTimeUnit) {
        case 'nanoSeconds':
        return chosenTimeNumber * 2629800000000000;
        break;
        case 'microSeconds': 
        return chosenTimeNumber * 2629800000000; 
        break;
        case 'miliSeconds': 
        return chosenTimeNumber * 2629800000; 
        case 'centiSeconds': 
        return chosenTimeNumber * 262980000; 
        case 'seconds': 
        return chosenTimeNumber * 2629800; 
        case 'minutes': 
        return chosenTimeNumber * 43830; 
        case 'hours': 
        return chosenTimeNumber * 730; 
        case 'days': 
        return chosenTimeNumber * 30.417; 
        case 'weeks': 
        return chosenTimeNumber * 4.345; 
        case 'months': 
        return chosenTimeNumber; 
        case 'years': 
        return chosenTimeNumber / 12; 
        default:
        alert("Unsupported time unit");
    }
}
//
function convertFromYears(chosenTimeNumber, convertToTimeUnit){
    switch (convertToTimeUnit) {
        case 'nanoSeconds':
        return chosenTimeNumber * 31556926000000000;
        break;
        case 'microSeconds': 
        return chosenTimeNumber * 315569260000000; 
        break;
        case 'miliSeconds': 
        return chosenTimeNumber * 315569260000; 
        case 'centiSeconds': 
        return chosenTimeNumber * 31556926000; 
        case 'seconds': 
        return chosenTimeNumber * 3155692600; 
        case 'minutes': 
        return chosenTimeNumber * 525600; 
        case 'hours': 
        return chosenTimeNumber * 8760; 
        case 'days': 
        return chosenTimeNumber * 365; 
        case 'weeks': 
        return chosenTimeNumber * 52.143; 
        case 'months': 
        return chosenTimeNumber * 12; 
        case 'years': 
        return chosenTimeNumber; 
        default:
        alert("Unsupported time unit");
    }
}

//Currency Converter---------------------------------------------------------------------------------------------

function swapCurrencyUnits(){
    const selectCurrency = document.getElementById("selectCurrency");
    const selectCurrencyResultType = document.getElementById("selectCurrencyResultType");

    const currentSelectCurrency = selectCurrency.value;
    const currentSelectCurrencyResultType = selectCurrencyResultType.value;
     
    // Swap
    selectCurrency.value = currentSelectCurrencyResultType;
    selectCurrencyResultType.value = currentSelectCurrency;
}

function activateCurrencyConversion(){
    document.getElementById("currencyConverterButton").addEventListener("click", convertCurrency);
    document.getElementById("selectCurrency").addEventListener("change", convertCurrency); // instead of click, use change so that the calculation can start automatically
    document.getElementById("selectCurrencyResultType").addEventListener("change", convertCurrency); // instead of click, use change so that the calculation can start automatically
}

document.addEventListener('DOMContentLoaded', function (){
    document.getElementById("currencyConverterSwapButton").addEventListener("click", swapCurrencyUnits);
    activateCurrencyConversion();

});

async function convertCurrency(){
    try {
        let placeCurrencyAmount = parseInt(document.getElementById("placeCurrencyAmount").value);
        let selectCurrency = document.getElementById("selectCurrency").value;
        let selectCurrencyResultType = document.getElementById("selectCurrencyResultType").value;
        let resultInput = document.getElementById("currencyResult");

        let myHeaders = new Headers();
        myHeaders.append("apikey", "bW1q36h73HF3MIEzHtkXE0ESZXGH2k66"); // API key

        // Fetch conversion data
        let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${selectCurrencyResultType}&from=${selectCurrency}&amount=${placeCurrencyAmount}`, {
            method: 'GET', // GET method for conversion
            headers: myHeaders,
        });

        if(!response.ok) {
           throw new Error("Error: Failed to fetch data"); 
        }

        let result = await response.json(); // Assuming the API returns JSON

        // Display the result
        resultInput.value = parseFloat(result.result);

    } catch(error){
        console.error("Error: failed conversion", error);
    }
};    

//Weight Converter------------------------------------------------------------------------------------------------

function setWeightValues() {
    // Get references to the input elements
    const placedWeightUnitInput = document.getElementById("chosenWeight");
    const selectWeightUnit = document.getElementById("selectWeight");
    const selectWeightUnitResult = document.getElementById("typeOfWeightResult");

    // Add event listeners to all relevant input elements
    placedWeightUnitInput.addEventListener("input", convertWeights);
    selectWeightUnit.addEventListener("change", convertWeights);
    selectWeightUnitResult.addEventListener("change", convertWeights);

    // Initial conversion
    convertWeights();
    resetConverterValues();
}

function convertWeights() {
    const placedWeightUnitInput = parseFloat(document.getElementById("chosenWeight").value);
    const selectWeightUnit = document.getElementById("selectWeight").value;
    const selectWeightUnitResult = document.getElementById("typeOfWeightResult").value;
    let result;

    switch (selectWeightUnit) {
        case 'microGr':
            result = convertFromMicroGrams(placedWeightUnitInput, selectWeightUnitResult).toFixed(4);
            break;
        case 'miliGr':
            result = convertFromMiliGrams(placedWeightUnitInput, selectWeightUnitResult).toFixed(4);
            break;
        case 'oz':
            result = convertFromOZ(placedWeightUnitInput, selectWeightUnitResult).toFixed(4);
            break;
        case 'Gr':
            result = convertFromGrams(placedWeightUnitInput, selectWeightUnitResult).toFixed(4);
            break;
        case 'lbs':
            result = convertFromPounds(placedWeightUnitInput, selectWeightUnitResult).toFixed(4);
            break;
        case 'kg':
            result = convertFromKilograms(placedWeightUnitInput, selectWeightUnitResult).toFixed(4);
            break;
        case 'ton':
            result = convertFromTon(placedWeightUnitInput, selectWeightUnitResult).toFixed(4);
            break;
        default:
            alert("Unsupported weight unit");
            return;
    }

    document.getElementById("weightResult").value = result;
}

function swapWeightUnits() {
    const selectWeightUnit = document.getElementById("selectWeight");
    const selectWeightUnitResult = document.getElementById("typeOfWeightResult");

    const currentSelectWeightUnit = selectWeightUnit.value;
    const currentSelectWeightUnitResult = selectWeightUnitResult.value;
    // Swap
    selectWeightUnit.value = currentSelectWeightUnitResult;
    selectWeightUnitResult.value = currentSelectWeightUnit;

    // Convert weights after swapping
    convertWeights();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("weightConverterButton").addEventListener("click", swapWeightUnits);
    setWeightValues();
});

function convertFromMicroGrams(placedWeightUnitInput, selectWeightUnitResult) {
    switch (selectWeightUnitResult) {
        case 'microGr':
            return placedWeightUnitInput;
        case 'miliGr':
            return placedWeightUnitInput / 1000; // 1 microgram = 0.001 milligrams
        case 'oz':
            return placedWeightUnitInput / 28349.5231; // 1 microgram = 3.52739619e-8 ounces
        case 'Gr':
            return placedWeightUnitInput / 1e+6; // 1 microgram = 1e-6 grams
        case 'lbs':
            return placedWeightUnitInput / 453592370; // 1 microgram = 2.20462262e-9 pounds
        case 'kg':
            return placedWeightUnitInput / 1e+9; // 1 microgram = 1e-9 kilograms
        case 'ton':
            return placedWeightUnitInput / 1.10231131e+12; // 1 microgram = 1.10231131e-12 US tons
        default:
            alert("Error in Calculation");
            break;
    }
}

function convertFromMiliGrams(placedWeightUnitInput, selectWeightUnitResult) {
    switch (selectWeightUnitResult) {
        case 'microGr':
            return placedWeightUnitInput * 1000;
        case 'miliGr':
            return placedWeightUnitInput;
        case 'oz':
            return placedWeightUnitInput / 28349.5;
        case 'Gr':
            return placedWeightUnitInput / 1000;
        case 'lbs':
            return placedWeightUnitInput / 453592;
        case 'kg':
            return placedWeightUnitInput / 1000000;
        case 'ton':
            // For metric tons
            return placedWeightUnitInput / 1000000000;
            // For US tons, use: return placedWeightUnitInput / 907185000;
        default:
            alert("Error in Calculation");
            break;
    }
}

function convertFromOZ(placedWeightUnitInput, selectWeightUnitResult) {
    switch (selectWeightUnitResult) {
        case 'microGr':
            // 1 ounce = 28,349,523.1 micrograms
            return placedWeightUnitInput * 28349523.1;
        case 'miliGr':
            // 1 ounce = 28,349.5231 milligrams
            return placedWeightUnitInput * 28349.5231;
        case 'oz':
            // No conversion needed for ounces
            return placedWeightUnitInput;
        case 'Gr':
            // 1 ounce = 28.3495231 grams
            return placedWeightUnitInput * 28.3495231;
        case 'lbs':
            // 1 ounce = 0.0625 pounds
            return placedWeightUnitInput * 0.0625;
        case 'kg':
            // 1 ounce = 0.0283495231 kilograms
            return placedWeightUnitInput * 0.0283495231;
        case 'ton':
            // 1 ounce = 0.0000283495231 metric tons
            return placedWeightUnitInput * 0.0000283495231;
            // For US tons, use: return placedWeightUnitInput * 0.00003125;
        default:
            alert("Unsupported weight unit");
            break;
    }
}

function convertFromGrams(placedWeightUnitInput, selectWeightUnitResult) {
    switch (selectWeightUnitResult) {
        case 'microGr':
            // 1 gram = 1,000,000 micrograms
            return placedWeightUnitInput * 1000000;
        case 'miliGr':
            // 1 gram = 1,000 milligrams
            return placedWeightUnitInput * 1000;
        case 'oz':
            // 1 gram = 0.03527396 ounces
            return placedWeightUnitInput * 0.03527396;
        case 'Gr':
            // No conversion needed for grams
            return placedWeightUnitInput;
        case 'lbs':
            // 1 gram = 0.00220462 pounds
            return placedWeightUnitInput * 0.00220462;
        case 'kg':
            // 1 gram = 0.001 kilograms
            return placedWeightUnitInput / 1000;
        case 'ton':
            // 1 gram = 0.000001 metric tons
            return placedWeightUnitInput / 1000000;
            // For US tons, use: return placedWeightUnitInput / 907184.74;
        default:
            alert("Error in Calculation");
            break;
    }
}

function convertFromPounds(placedWeightUnitInput, selectWeightUnitResult) {
    switch (selectWeightUnitResult) {
        case 'microGr':
            return placedWeightUnitInput * 453592370;
        case 'miliGr':
            return placedWeightUnitInput * 453592.37;
        case 'oz':
            return placedWeightUnitInput * 16;
        case 'Gr':
            return placedWeightUnitInput * 453.59237;
        case 'lbs':
            return placedWeightUnitInput;
        case 'kg':
            return placedWeightUnitInput / 2.2046226218;
        case 'ton':
            // For metric tons
            return placedWeightUnitInput / 2204.6226218;
            // For US tons, use: return placedWeightUnitInput / 2000;
        default:
            alert("Error in Calculation");
            break;
    }
}

function convertFromKilograms(placedWeightUnitInput, selectWeightUnitResult) {
    switch (selectWeightUnitResult) {
        case 'microGr':
            return placedWeightUnitInput * 1000000000;
        case 'miliGr':
            return placedWeightUnitInput * 1000000;
        case 'oz':
            return placedWeightUnitInput * 35.27396;
        case 'Gr':
            return placedWeightUnitInput * 1000;
        case 'lbs':
            return placedWeightUnitInput * 2.2046226218;
        case 'kg':
            return placedWeightUnitInput;
        case 'ton':
            // For metric tons
            return placedWeightUnitInput / 1000;
            // For US tons, use: return placedWeightUnitInput / 907.18474;
        default:
            alert("Error in Calculation");
            break;
    }
}

function convertFromTon(placedWeightUnitInput, selectWeightUnitResult) {
    switch (selectWeightUnitResult) {
        case 'microGr':
            // 1 metric ton = 1,000,000,000,000 micrograms
            return placedWeightUnitInput * 1000000000000;
        case 'miliGr':
            // 1 metric ton = 1,000,000,000 milligrams
            return placedWeightUnitInput * 1000000000;
        case 'oz':
            // 1 metric ton = 35,273.962 ounces
            return placedWeightUnitInput * 35273.962;
        case 'Gr':
            // 1 metric ton = 1,000,000 grams
            return placedWeightUnitInput * 1000000;
        case 'lbs':
            // 1 metric ton = 2,204.62262 pounds
            return placedWeightUnitInput * 2204.62262;
        case 'kg':
            // 1 metric ton = 1,000 kilograms
            return placedWeightUnitInput * 1000;
        case 'ton':
            // No conversion needed for metric tons
            return placedWeightUnitInput;
        default:
            alert("Error in Calculation");
            break;
    }
}

//Temperature Converter-------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function(){
    const TemperatureConverterCalculations = {
        C: {
            F: celsius => (celsius * 9/5) + 32,
            K: celsius => celsius + 273.15
        },
        F: {
            C: fahrenheit => (fahrenheit - 32) * 5/9,
            K: fahrenheit => (fahrenheit - 32) * 5/9 + 273.15
        },
        K: {
            C: kelvin => kelvin - 273.15,
            F: kelvin => (kelvin - 273.15) * 9/5 + 32
        }
    };

    const chosenTemperatureNumber = document.querySelector("#chosenTemperature");
    const temperatureResult = document.querySelector("#temperatureResult");
    const selectTemperature = document.querySelector("#selectTemperature");
    const typeOfTemperatureResult = document.querySelector("#typeOfTemperatureResult");

    function getTemperatureConversion(selectOption, resultOption, temperature){
        if(selectOption === resultOption){
            return temperature
        }
        return TemperatureConverterCalculations[selectOption][resultOption](temperature);        
    }
    
    function displayTemperatureResult(result){
        temperatureResult.value = result.toFixed(3);
    }

    function convertTemperature(){
        const inputTemperature = parseFloat(chosenTemperatureNumber.value);
        const selectInputTemperature = selectTemperature.value;
        const typeOfTemperatureInputResult = typeOfTemperatureResult.value;

        if(!isNaN(inputTemperature)){
            const result = getTemperatureConversion(selectInputTemperature, typeOfTemperatureInputResult, inputTemperature);
            displayTemperatureResult(result);
        } else {
            temperatureResult.value = "";
        }
    }

    function swapTemperatureUnits() {
        const selectTemperature = document.getElementById("selectTemperature");
        const typeOfTemperatureResult = document.getElementById("typeOfTemperatureResult");
    
        const currentSelectTemperature = selectTemperature.value;
        const currentTypeOfTemperatureResult = typeOfTemperatureResult.value;
    
        //swap
    
        selectTemperature.value = currentTypeOfTemperatureResult;
        typeOfTemperatureResult.value = currentSelectTemperature;
    
        convertTemperature();
        resetConverterValues();
    
    }

    chosenTemperatureNumber.addEventListener("input", convertTemperature);
    selectTemperature.addEventListener("change", convertTemperature);
    typeOfTemperatureResult.addEventListener("change", convertTemperature);

    document.querySelector("#selectTemperature").addEventListener("change", swapTemperatureUnits);
    document.querySelector("#typeOfTemperatureResult").addEventListener("change", swapTemperatureUnits);
    document.getElementById("temperatureConverterButton").addEventListener("click", swapTemperatureUnits);
    
});

//RadianDegree Converter---------------------------------------------------------------------------------------   

const numberInput = document.getElementById('placeDegRadNumber');
const resultInput = document.getElementById('displayDegRadResult');
const assignUnitSelect = document.getElementById('assignDegRadUnit');
const convertToUnitSelect = document.getElementById('convertToDegRadUnit');
const piButton = document.getElementById('piButton');

piButton.addEventListener('click', function () {
        numberInput.value += 'π';
        convertUnits(); // Trigger conversion when π is added
});

 numberInput.addEventListener('input', convertUnits);
assignUnitSelect.addEventListener('change', convertUnits);
convertToUnitSelect.addEventListener('change', convertUnits);

function convertUnits() {
        const inputValue = math.evaluate(numberInput.value.replace(/π/g, 'pi')) || 0; // have to change from π to "pi" so that the .evaluate method can understand it.  
        const assignUnit = assignUnitSelect.value;
        const convertToUnit = convertToUnitSelect.value;
    
        let result;
    
        if (assignUnit === 'choseDegrees' && convertToUnit === 'choseRadians') {
            let radianValue = math.unit(inputValue, 'deg').to('rad').toNumber();
            let fraction = math.fraction(radianValue / Math.PI); // math.fraction assures that it treats the calculation as a fraction so that it isn't converted to decimal. 
            result = fraction.n  + 'π' + '/' + fraction.d;
        } else if (assignUnit === 'choseRadians' && convertToUnit === 'choseDegrees') {
            result = math.format(math.unit(inputValue, 'rad').to('deg'));
        } else {
            result = inputValue;
        }
    
        // Update the input field
        resultInput.value = result;
}

document.addEventListener("DOMContentLoaded", function(){
        resetConverterValues();
})

/* Reset Values---------------------------------------------------------------------------------------------------------------------------------------------*/  
    
function resetConverterValues() {

        /*Length Converter---------------------------------------------*/
        document.getElementById("placeLength").value = "";
        document.getElementById("selectLength") ;
        document.getElementById("typeOfResult");
        document.getElementById("lengthResult").value = "";

        /*Time Converter---------------------------------------------*/
        
        document.getElementById("chosenTime").value = "";
        document.getElementById("selectTime");
        document.getElementById("typeOfTimeResult");
        document.getElementById("timeResult").value = "";

        /*Currency Converter---------------------------------------------*/

        document.getElementById("placeCurrencyAmount").value = "";
        document.getElementById("selectCurrency");
        document.getElementById("selectCurrencyResultType");
        document.getElementById("currencyResult").value = "";

        /*Weight Converter---------------------------------------------*/

        document.getElementById("chosenWeight").value = "";
        document.getElementById("selectWeight");
        document.getElementById("typeOfWeightResult");    
        document.getElementById("weightResult").value = "";

        /*Temperature Converter-----------------------------------------------*/
        
        document.querySelector("#chosenTemperature").value = "";
        document.querySelector("#temperatureResult").value = "";
        document.querySelector("#selectTemperature");
        document.querySelector("#typeOfTemperatureResult");
    
        /*Radian/Degree Converter---------------------------------------------*/

        document.getElementById('placeDegRadNumber').value = "";
        document.getElementById('displayDegRadResult').value = "";
        document.getElementById('assignDegRadUnit');
        document.getElementById('convertToDegRadUnit');
    }
