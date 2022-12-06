function display(val) {
    document.getElementById('result').value += val;
    
    return val;
}

function solve() {
    let rhs = document.getElementById('result').value;
    let lhs = eval(rhs);
    
    document.getElementById('result').value = lhs;
    
    return lhs;
}

function clearResult() {
    document.getElementById('result').value = "";
}