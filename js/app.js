function getInputFeildValue (inputFeildID){
    const inputFeildValue = document.getElementById(inputFeildID);
    const inputFeildString = inputFeildValue.value;
    const cost = parseFloat(inputFeildString);
    return cost;
}
function setTextValue(ValueID, value){
    const textValueByID = document.getElementById(ValueID);
    textValueByID.innerHTML = value;
}

document.getElementById('btn-player-calc').addEventListener('click', function(){
    const playerCost = getInputFeildValue('player-cost');
    const playerCostCal = playerCost * 5;
    setTextValue('player-cost-value',playerCostCal);
    
})