function addValue(value){
    const field = document.getElementById("calculate-feild");
    document.getElementById("calculate-feild").value += value;
    setTimeout(() => {
        field.scrollLeft = field.scrollWidth;
    }, 10);
}

function deleteValue (){
    document.getElementById("calculate-feild").value = document.getElementById("calculate-feild").value.slice(0, -1);
}

function formatInput(){
    document.getElementById("calculate-feild").value = ''
}


function result(){
    try{
        document.getElementById("calculate-feild").value = eval(document.getElementById("calculate-feild").value);
    }catch{
        document.getElementById("calculate-feild").value = "error syntex"
    }
}