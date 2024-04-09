function calc() {
    var cost = document.getElementById('cost').value;
    var liters = document.getElementById('liters').value;

    var totalCost = cost * liters;

    document.getElementById('output').innerHTML = "AED " + totalCost;
}