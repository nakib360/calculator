const field = document.getElementById("calculate-feild");
const resultField = document.getElementById("result-field");


function updateFontSize() {
    if (field.value.length >= 20) {
        field.style.fontSize = "20px";
    } else if (field.value.length >= 14) {
        field.style.fontSize = "28px";
    } else {
        field.style.fontSize = "36px";
    }
}


function addValue(value) {
    
    if (resultField.innerText !== "" && field.value === "") {
        field.value = resultField.innerText; 
        resultField.innerText = ""; 
    }

    field.value += value; 
    updateFontSize(); 
    setTimeout(() => {
        field.scrollLeft = field.scrollWidth;
    }, 10);
}

function deleteValue() {
    field.value = field.value.slice(0, -1);
    updateFontSize();
}

function formatInput() {
    field.value = "";
    resultField.innerText = "";
    updateFontSize();
}


function result() {
    try {
        const output = eval(field.value);
        resultField.innerText = parseFloat(output.toFixed(5)); 
        field.value = "";
    } catch {
        resultField.innerText = "error syntax";
    }
}
