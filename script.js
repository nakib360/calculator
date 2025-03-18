const field = document.getElementById("calculate-feild");


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
    document.getElementById("result-field").innerText = "";
    updateFontSize(); 
}

function result() {
    try {
        document.getElementById("result-field").innerText = eval(field.value);
    } catch {
        document.getElementById("result-field").innerText = "error syntex";
    }
}
