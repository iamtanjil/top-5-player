
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

function getTextValue (textId){
    const textValue = document.getElementById(textId);
    const textValueString = textValue.innerText;
    const textValueNumber = parseFloat(textValueString);
    return textValueNumber;
}

document.getElementById('btn-player-calc').addEventListener('click', function(){
    const playerCost = getInputFeildValue('player-cost');
    const playerCostCal = playerCost * 5;
    if(playerCost === Number){
        setTextValue('player-cost-value',playerCostCal);
    }
    else{
        alert('Input a valid Nuber');
    }
})

document.getElementById('btn-total-cal').addEventListener('click', function(){
    const totalPlayerCost = getTextValue('player-cost-value');
    const totalManagerCost = getInputFeildValue('manager-cost');
    const totalCoachCost = getInputFeildValue('coach-cost');
    const allCost = totalPlayerCost + totalManagerCost + totalCoachCost;
    if(totalManagerCost === Number && totalCoachCost === Number){
        setTextValue('all-cost', allCost);
    }
    else{
        alert('Input a valid Nuber');
    }
})