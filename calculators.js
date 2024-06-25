
// Scientific Calculator//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
const resultSec = document.getElementById("result");
let currentResult = "";
let previousResult = "";

resultSec.addEventListener("input", () => {
      currentResult = resultSec.value;
});

function appendToResult(value) {
      currentResult += value;
      resultSec.value = currentResult;
}

function clearResult() {
      currentResult = "";
      resultSec.value = "";
}

function deleteLastChar() {
      currentResult = currentResult.slice(0, -1);
      resultSec.value = currentResult;
}

function calculateSquareRoot() {
      appendToResult('sqrt(');
}

function addPi() {
      appendToResult('π');
}

function calculate() {
    try {
        let expression = currentResult.replace(/(\d+)π/g, "$1*" + Math.PI);
        expression = expression.replace(/π/g, Math.PI);
        expression = expression.replace(/sqrt\((.*?)\)/g, "Math.sqrt($1)");
        expression = expression.replace(/\^/g, "**");

        previousResult = currentResult;
        currentResult = math.evaluate(expression).toString();
        resultSec.value = currentResult;
    } catch (error) {
          resultSec.value = "Error";
      }
}
//
function calculateSquareRoot() { // create a function to calculate the square root
    try { // use try method
        const expression = currentResult.replace(/π/g, Math.PI); // replace π with the Math.PI in a constant variable called expression
        const result = math.evaluate(expression); // new constant variable result be equaled to the result of evaluating the expression.
        if (!isNaN(result) && result >= 0) { // if method: if result is not a valid number and greater or equal to 0
            previousResult = currentResult;
            currentResult = Math.sqrt(result); // square root the result and equal it to current result
            resultSec.value = currentResult; // make the #result input value be dictated by the current result
        } else { // else method 
            resultSec.value = "Invalid Input"; // in case the if operations fail, update #result to "Invalid Input"
        }
    } catch (error) { // catch method with inner variable error
        resultSec.value = "Error"; // in case that the try method fails (including the if/else), update #result to "Error"
    }
}
//
function addPi(){ // create a function that calculates Pi
    currentResult += "π"; // add the pi sign as a placeholder for the current result
    resultSec.value = currentResult; // make the #result be dictated by the current result
}

function evaluateExpression(){ // create a function to evaluate the expressions
    try { // try method
        let expression = currentResult.replace(/π/g, Math.PI); //  let expression be the replacement of π with Math.PI in the current Result
        previousResult = currentResult;
        currentResult = math.evaluate(expression); // current result be the evaluation of the expression.
        resultSec.value = currentResult; //  make the #result be dictated by the current result

    } catch(error){ //catch method with inner variable error
          resultSec.value = "Error"; // in case that the try method fails, update the #result value to "Error"
    }

    resultSec.addEventListener('input', (event) => {
        currentResult = event.target.value;
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            calculate();
        }
        else {
            console.log("key error");
        }
    }); 

}

function returnPreviousNumber(){
    currentResult = previousResult;
    resultSec.value = currentResult;
};


//Pythagorean Calculator----------------------------------------------------------------------------------------------------------------------------

const BOXA = document.getElementById("boxA"); // create a variable called BOXA that is equal to the box A
const BOXB = document.getElementById("boxB"); // create a variable called BOXB that is equal to the box B
const BOXC = document.getElementById("boxC"); // create a variable called BOXC that is equal to the box C
const submitButton = document.getElementById("submitButton"); // create a variable called submitBtn that is equal to the submit button
const formOfInputsHypothenuse = document.getElementById("formOfInputsHypothenuse");


window.onbeforeunload = function () {
    resetValues();  // When the page is refreshed, call the resetValues() function
};
//
function resetValues() { 
    BOXA.value = ""; // when refreshed, set the placeholder of boxA empty
    BOXB.value = ""; // when refreshed, set the placeholder of boxA empty
    BOXC.value = ""; // when refreshed, set the placeholder of boxA empty
}
//
function submitInputs() {
    submitButton.addEventListener("click", () => {
        calculateSides(); // when the submit button is clicked, it calls for the function to calculate the sides.
    });

    formOfInputsHypothenuse.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    });
}
//
function calculateSides() {
    const valueOfA = parseFloat(BOXA.value);
    const valueOfB = parseFloat(BOXB.value);
    const valueOfC = parseFloat(BOXC.value);

    if (valueOfA < 0 || valueOfB < 0 || valueOfC < 0) {
        // Handle negative values error
        displayErrorForHypothenuse(BOXA, "Invalid input");
        displayErrorForHypothenuse(BOXB, "Invalid input");
        displayErrorForHypothenuse(BOXC, "Invalid input");
        return;
    }

    try {
        let result; // It was better to create a variable to store the values of the calculations

        if (!isNaN(valueOfA) && !isNaN(valueOfB)) {
            // Calculation for BOXC
            result = Math.sqrt(Math.pow(valueOfA, 2) + Math.pow(valueOfB, 2)).toFixed(2);
        } else if (!isNaN(valueOfC) && !isNaN(valueOfA)) {
            // Calculation for BOXB
            result = Math.sqrt(Math.pow(valueOfC, 2) - Math.pow(valueOfA, 2)).toFixed(2);
        } else if (!isNaN(valueOfC) && !isNaN(valueOfB)) {
            // Calculation for BOXA
            result = Math.sqrt(Math.pow(valueOfC, 2) - Math.pow(valueOfB, 2)).toFixed(2);
        }

        if (isNaN(result)) {
            // Handle calculation error
            displayErrorForHypothenuse(BOXA, "Calculation Error");
            displayErrorForHypothenuse(BOXB, "Calculation Error");
            displayErrorForHypothenuse(BOXC, "Calculation Error");
        } else {
            // Update the result only if the calculation is successful
            if (!isNaN(valueOfA) && !isNaN(valueOfB)) {
                BOXC.value = result;
            } else if (!isNaN(valueOfC) && !isNaN(valueOfA)) {
                BOXB.value = result;
            } else if (!isNaN(valueOfC) && !isNaN(valueOfB)) {
                BOXA.value = result;
            }
        }
    } catch (error) {
        // display error message if try method fails
        displayErrorForHypothenuse(BOXA, "General Error");
        displayErrorForHypothenuse(BOXB, "General Error");
        displayErrorForHypothenuse(BOXC, "General Error");
    }
}
//
function displayErrorForHypothenuse(elementOfHypothenuse, messageOfHypotenuse) {
    elementOfHypothenuse.value = ''; // Clear the input value (that's why it wasn't working because I didn't clear the inputs first)
    elementOfHypothenuse.placeholder = messageOfHypotenuse; // Use placeholder for error message ( also why it didn't work because it was the placeholder not value.)
    elementOfHypothenuse.style.color = "red";
}

function resetPythagoreanCalcValues(){
    BOXA.value = "";
    BOXB.value = "";
    BOXC.value = "";
}
submitInputs();

// Heron Area Finder------------------------------------------------------------------------------------------------- 

const variableAofHeron = document.getElementById("variableAforHeron");
const variableBofHeron = document.getElementById("variableBforHeron");
const variableCofHeron = document.getElementById("variableCforHeron");
const variableSofHeron = document.getElementById("showSvariableHeron");
const submitButtonForS = document.getElementById("submitButtonForS");
const submitButtonForHeron = document.getElementById("submitButtonForHeron");
const finalResultofHeron = document.getElementById("finalResultofHeron");

window.onload = function() {
    resetValuesforHeron();
  };

function resetValuesforHeron() { 
    variableAofHeron.value = "";
    variableBofHeron.value = "";
    variableCofHeron.value = "";
    variableSofHeron.value = "";
    finalResultofHeron.value = "";

}

function submitSforHeron(){
    submitButtonForHeron.addEventListener("click", () => {
        // Important to parse the values so that the computer treats them as numbers
        let heronAparse = parseFloat(variableAofHeron.value);
        let heronBparse = parseFloat(variableBofHeron.value);
        let heronCparse = parseFloat(variableCofHeron.value);
        
        // Check if the numbers placed are valid
        if (!isNaN(heronAparse) && heronAparse >= 0 && !isNaN(heronBparse) && heronBparse >= 0 && !isNaN(heronCparse) && heronCparse >= 0) {
            let heronSparse = calculateSforHeron(heronAparse, heronBparse, heronCparse);
            variableSofHeron.value = heronSparse;
            submitHeron();
        } else {
            alert("Heron Area: Please enter valid numbers for a, b, and c.");
        }
    });
}

function submitHeron(){
    submitButtonForHeron.addEventListener("click", () => {
        let heronAparse = parseFloat(variableAofHeron.value);
        let heronBparse = parseFloat(variableBofHeron.value);
        let heronCparse = parseFloat(variableCofHeron.value);
        let heronSparse = parseFloat(variableSofHeron.value);
        
        let heron = Math.sqrt(heronSparse * (heronSparse - heronAparse) * (heronSparse - heronBparse) * (heronSparse - heronCparse));
        finalResultofHeron.value = heron.toFixed(2);
    });
}

function calculateSforHeron(heronAparse, heronBparse, heronCparse){
    return (heronAparse + heronBparse + heronCparse) / 2;
}

resetValuesforHeron();
submitSforHeron();
submitHeron();

// Trigonometry calculator-------------------------------------------------------------------------------------------

const angleAInput = document.getElementById("angleA");
const angleBInput = document.getElementById("angleB");
const sideAInput = document.getElementById("sideA");
const sideBInput = document.getElementById("sideB");
const sideCInput = document.getElementById("sideC");
const angleC = 90;

function calculateTrigonometricValues() {
    const angleA = parseFloat(angleAInput.value);
    const angleB = parseFloat(angleBInput.value);
    const sideA = parseFloat(sideAInput.value);
    const sideB = parseFloat(sideBInput.value);
    const sideC = parseFloat(sideCInput.value);

    switch (true) {
        case (!isNaN(angleA) && isNaN(angleB)): // if user only placed angle A
            getBangle(angleA);
            break;
        case (isNaN(angleA) && !isNaN(angleB)):  // if user only placed angle B
            getAangle(angleB);
            break;
        case (!isNaN(sideA) && !isNaN(angleA)): // if user placed angle A and side a
            given_A_and_a(angleA, sideA);
            break;
        case (!isNaN(sideB) && !isNaN(angleB)): // if user placed side b and angle B
            given_B_and_b(angleB, sideB);
            break;
        case (!isNaN(sideC) && !isNaN(angleA)): // if user placed side c and angle A
            given_A_and_c(angleA, sideC);
            break;
        case (!isNaN(sideC) && !isNaN(angleB)): // if user placed side c and angle B
            given_B_and_c(angleB, sideC);
            break;
        case (!isNaN(sideA) && !isNaN(sideB)):
            given_a_and_b(sideA, sideB); // if user placed side a and side b
            break;
        case (!isNaN(sideC) && !isNaN(sideB)):
            given_c_and_b(sideC, sideB); // if user placed side c and side b
            break;
        case (!isNaN(sideC) && !isNaN(sideA)):
            given_c_and_a(sideC, sideA); // if user placed side c and side a
            break;
        case (!isNaN(sideC) && !isNaN(angleC)):
            given_C_and_c(angleC, sideC);
        default:
            /* alert("Error when detecting inputs") */
    }
}

function getBangle(A) {
    const B = angleC - A;
    angleBInput.value = B.toFixed(0);
}

function getAangle(B) {
    const A = angleC - B;
    angleAInput.value = A.toFixed(0);
}

function given_A_and_a(A, a) {
    const B = angleC - A;
    angleBInput.value = B.toFixed(2);
    const b = a / Math.tan((A * Math.PI) / 180);
    sideBInput.value = b.toFixed(2);
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2);
    sideCInput.value = c;
}

function given_B_and_b(B, b) {
    const A = angleC - B;
    angleAInput.value = A.toFixed(2);
    const a = b / Math.tan((B * Math.PI) / 180);
    sideAInput.value = a.toFixed(2);
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2);
    sideCInput.value = c;
}

function given_A_and_c(A, c) {
    const B = angleC - A;
    angleBInput.value = B.toFixed(2);
    const b =  c * Math.cos((A * Math.PI) / 180);
    sideBInput.value = b.toFixed(2);
    const a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2)).toFixed(2);
    sideAInput.value = a;
}

function given_B_and_c(B, c) {
    const A = angleC - B;
    angleAInput.value = A.toFixed(2);
    const b = c * Math.sin((B * Math.PI) / 180);
    sideBInput.value = b.toFixed(2);
    const a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2)).toFixed(2);
    sideAInput.value = a;
}

function given_a_and_b(a, b) {
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2);
    sideCInput.value = c;
    const A = (Math.asin(a / c) * 180) / Math.PI;
    angleAInput.value = A.toFixed(2);
    const B = angleC - A;
    angleBInput.value = B.toFixed(2);
}

function given_c_and_b(c, b) {
    const a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2)).toFixed(2);
    sideAInput.value = a;
    const A = (Math.asin(a / c) * 180) / Math.PI;
    angleAInput.value = A.toFixed(2);
    const B = angleC - A;
    angleBInput.value = B.toFixed(2);
}

function given_c_and_a(c, a) {
    const b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2)).toFixed(2);
    sideBInput.value = b;
    const A = (Math.asin(a / c) * 180) / Math.PI;
    angleAInput.value = A.toFixed(2);
    const B = angleC - A;
    angleBInput.value = B.toFixed(2);
}

function resetTrigonometricValues(){
    document.getElementById("angleA").value = "";
    document.getElementById("angleB").value = "";
    document.getElementById("sideA").value = "";
    document.getElementById("sideB").value = "";
    document.getElementById("sideC").value = "";
}

resetTrigonometricValues();

// Law of Sine Calculator--------------------------------------------------------------------------------------------------------------------

const angleASineInput = document.getElementById("angleASine");
const sideASineInput = document.getElementById("sideASine");
const angleBSineInput = document.getElementById("angleBSine");
const sideBSineInput = document.getElementById("sideBSine");         
const sideCSineInput = document.getElementById("sideCSine");
const angleCforSineInput = document.getElementById("angleCSine");

function calculateSineValues() {
    
    let angleA = parseFloat(angleASineInput.value);
    let sideA = parseFloat(sideASineInput.value);
    let angleB = parseFloat(angleBSineInput.value);
    let sideB = parseFloat(sideBSineInput.value);
    let sideC = parseFloat(sideCSineInput.value);
    let angleC = parseFloat(angleCforSineInput.value);

    switch (true) {
        case (!isNaN(angleA) && !isNaN(angleB) && !isNaN(sideB)):
            side_a_given_A_B_b_sine(angleA, angleB, sideB);
            break;
        
        case (!isNaN(angleA) && !isNaN(angleC) && !isNaN(sideC)):
            side_a_given_A_C_a_sine(angleA, angleC, sideC);
            break;
        
        case (!isNaN(angleA) && !isNaN(angleB) && !isNaN(sideA)):
            side_b_given_a_B_b_sine(angleA, angleB, sideA);
            break;

        case (!isNaN(angleB) && !isNaN(angleC) && !isNaN(sideC)):
            side_b_given_B_C_c_sine(angleB, angleC, sideC);
            break;

        case (!isNaN(angleA) && !isNaN(angleC) && !isNaN(sideA)):
            side_c_given_A_C_a_sine(angleA, angleC, sideA);
            break;

        case (!isNaN(angleB) && !isNaN(angleC) && !isNaN(sideB)):
            side_c_given_B_C_b_sine(angleB, angleC, sideB);
            break;

        case (!isNaN(angleB) && !isNaN(sideA) && !isNaN(sideB)):
            angle_A_given_B_a_b_sine(angleB, sideA, sideB);
            break;

        case (!isNaN(angleC) && !isNaN(sideA) && !isNaN(sideC)):
            angle_A_given_C_a_c_sine(angleC, sideA, sideC);
            break;

        case (!isNaN(angleA) && !isNaN(sideA) && !isNaN(sideB)):
            angle_B_given_A_a_b_sine(angleA, sideA, sideB);
            break;

        case (!isNaN(angleC) && !isNaN(sideB) && !isNaN(sideC)):
            angle_B_given_C_b_c_sine(angleC, sideB, sideC);
            break;

        case (!isNaN(angleA) && !isNaN(sideA) && !isNaN(sideC)):
            angle_C_given_A_a_c_sine(angleA, sideA, sideC);
            break;

        case (!isNaN(angleB) && !isNaN(sideB) && !isNaN(sideC)):
            angle_C_given_B_b_c_sine(angleB, sideB, sideC);
            break;
        default:
             alert("Error when detecting inputs");
    }
    
};

function side_a_given_A_B_b_sine(angleA, angleB, sideB) {
    
    const angleC = 180 - angleA - angleB;
    angleCforSineInput.value = angleC.toFixed(2);

    const sideA = (sideB * Math.sin((angleA * Math.PI) / 180)) / Math.sin((angleB * Math.PI) / 180);
    sideASineInput.value = sideA.toFixed(2);

    const sideC = (sideB * Math.sin((angleC * Math.PI) / 180)) / Math.sin((angleB * Math.PI) / 180);
    sideCSineInput.value = sideC.toFixed(2);

};

function side_a_given_A_C_a_sine(angleA, angleC, sideC) {
    
    const angleB = 180 - angleA - angleC;
    angleBSineInput.value = angleB.toFixed(2);

    const sideA = (sideC * Math.sin((angleA * Math.PI) / 180)) / Math.sin((angleC * Math.PI) / 180);
    sideASineInput.value = sideA.toFixed(2);

    const sideB = (sideC * Math.sin((angleB * Math.PI) / 180)) / Math.sin((angleC * Math.PI) / 180);
    sideBSineInput.value = sideB.toFixed(2);

};

function side_b_given_a_B_b_sine(angleA, angleB, sideA) {
    
    const angleC = 180 - angleA - angleB;
    angleCforSineInput.value = angleC.toFixed(2);

    const sideB = (sideA * Math.sin((angleB * Math.PI) / 180)) / Math.sin((angleA * Math.PI) / 180);
    sideBSineInput.value = sideB.toFixed(2);

    const sideC = (sideA * Math.sin((angleC * Math.PI) / 180)) / Math.sin((angleA * Math.PI) / 180);
    sideCSineInput.value = sideC.toFixed(2);

};

function side_b_given_B_C_c_sine(angleB, angleC, sideC) {
    const angleA = 180 - angleB - angleC;
    angleASineInput.value = angleA.toFixed(2);

    const sideB = (sideC * Math.sin((angleB * Math.PI) / 180)) / Math.sin((angleC * Math.PI) / 180);
    sideBSineInput.value = sideB.toFixed(2);

    const sideA = (sideC * Math.sin((angleA * Math.PI) / 180)) / Math.sin((angleC * Math.PI) / 180);
    sideASineInput.value = sideA.toFixed(2);

}

function side_c_given_A_C_a_sine(angleA, angleC, sideA) {
    
    const angleB = 180 - angleA - angleC;
    angleBSineInput.value = angleB.toFixed(2);

    const sideC = (sideA * Math.sin((angleC * Math.PI) / 180)) / Math.sin((angleA * Math.PI) / 180);
    sideCSineInput.value = sideC.toFixed(2);

    const sideB = (sideA * Math.sin((angleB * Math.PI) / 180)) / Math.sin((angleA * Math.PI) / 180);
    sideBSineInput.value = sideB.toFixed(2);

};

function side_c_given_B_C_b_sine(angleB, angleC, sideB) {
    
    const angleA = 180 - angleB - angleC;
    angleASineInput.value = angleA.toFixed(2);

    const sideC = (sideB * Math.sin((angleC * Math.PI) / 180)) / Math.sin((angleB * Math.PI) / 180);
    sideCSineInput.value = sideC.toFixed(2);

    const sideA = (sideB * Math.sin((angleA * Math.PI) / 180)) / Math.sin((angleB * Math.PI) / 180);
    sideASineInput.value = sideA.toFixed(2);

}

function angle_A_given_B_a_b_sine(angleB, sideA, sideB) {

    const angleA = Math.asin((sideA * Math.sin((angleB * Math.PI) / 180)) / sideB) * (180 / Math.PI);
    angleASineInput.value = angleA.toFixed(2);

    const angleC = 180 - angleA - angleB;
    angleCforSineInput.value = angleC.toFixed(2);

    const sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) - 2 * sideA * sideB * Math.cos((angleC * Math.PI) / 180));
    sideCSineInput.value = sideC.toFixed(2);

}

function angle_A_given_C_a_c_sine(angleC, sideA, sideC) {
    // Calculate angle A using the Law of Sines
    const angleA = Math.asin((sideA * Math.sin((angleC * Math.PI) / 180)) / sideC) * (180 / Math.PI);
    angleASineInput.value = angleA.toFixed(2);

    // Calculate angle B
    const angleB = 180 - angleA - angleC;
    angleBSineInput.value = angleB.toFixed(2);

    // Calculate side B using the Law of Sines
    const sideB = (sideC * Math.sin((angleB * Math.PI) / 180)) / Math.sin((angleC * Math.PI) / 180);
    sideBSineInput.value = sideB.toFixed(2);
}

function angle_B_given_A_a_b_sine(angleA, sideA, sideB) {

    const angleB = Math.asin((sideB * Math.sin((angleA * Math.PI) / 180)) / sideA) * (180 / Math.PI);
    angleBSineInput.value = angleB.toFixed(2);

    const angleC = 180 - angleA - angleB;
    angleCforSineInput.value = angleC.toFixed(2);

    const sideC = (sideA * Math.sin((angleC * Math.PI) / 180)) / Math.sin((angleA * Math.PI) / 180);
    sideCSineInput.value = sideC.toFixed(2);

};

function angle_B_given_C_b_c_sine(angleC, sideB, sideC) {

    const angleB = Math.asin((sideB * Math.sin((angleC * Math.PI) / 180)) / sideC) * (180 / Math.PI);
    angleBSineInput.value = angleB.toFixed(2);

    const angleA = 180 - angleB - angleC;
    angleASineInput.value = angleA.toFixed(2);

    const sideA = (sideC * Math.sin((angleA * Math.PI) / 180)) / Math.sin((angleC * Math.PI) / 180);
    sideASineInput.value = sideA.toFixed(2);
};

function angle_C_given_A_a_c_sine(angleA, sideA, sideC) {
    
    const angleC = Math.asin((sideC * Math.sin((angleA * Math.PI) / 180)) / sideA) * (180 / Math.PI);
    angleCforSineInput.value = angleC.toFixed(2);

    const angleB = 180 - angleA - angleC;
    angleBSineInput.value = angleB.toFixed(2);

    const sideB = (sideA * Math.sin((angleB * Math.PI) / 180)) / Math.sin((angleA * Math.PI) / 180);
    sideBSineInput.value = sideB.toFixed(2);
}

function angle_C_given_B_b_c_sine(angleB, sideB, sideC) {
    const angleC = Math.asin((sideC / sideB) * Math.sin((angleB * Math.PI) / 180)) * (180 / Math.PI);
    angleCforSineInput.value = angleC.toFixed(2);

    const angleA = 180 - angleB - angleC;
    angleASineInput.value = angleA.toFixed(2);

    const sideA = sideB * Math.sin((angleA * Math.PI) / 180) / Math.sin((angleB * Math.PI) / 180);
    sideASineInput.value = sideA.toFixed(2);
}

function resetLawOfSinesValues() {
    document.getElementById("angleASine").value = "";
    document.getElementById("sideASine").value = "";
    document.getElementById("sideBSine").value = "";
    document.getElementById("angleBSine").value = "";
    document.getElementById("angleCSine").value = "";
    document.getElementById("sideCSine").value = "";
}

resetLawOfSinesValues();
