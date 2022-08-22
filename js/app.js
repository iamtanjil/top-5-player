let liElement = 0;



//player select
function setLiItem(listId,value) {
    let ul = document.getElementById('ol');
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    ul.appendChild(li);
  }
function getText(textId){
    const text = document.getElementById(textId);
    const getText = text.innerText;
    return getText;
}


//cost calculation
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



//event Handeler
//player add to list button
document.getElementById('btn-messi').addEventListener('click', function(){
    if(liElement > 4){
        alert('You can not select more than 5 players');
        return;
    }
    liElement++;
    
    const getName = getText('messi-name');
    setLiItem('li1',getName);
    this.disabled = true;
    
})
document.getElementById('btn-neymar').addEventListener('click', function(){
    if(liElement > 4){
        alert('You can not select more than 5 players');
        return;
    }
    liElement++;
    const getName = getText('neymar-name');
    setLiItem('li1',getName);
    this.disabled = true;
})
document.getElementById('btn-dmaria').addEventListener('click', function(){
    if(liElement > 4){
        alert('You can not select more than 5 players');
        return;
    }
    liElement++;
    const getName = getText('dmaria-name');
    setLiItem('li1',getName);
    this.disabled = true;
})
document.getElementById('btn-tavez').addEventListener('click', function(){
    if(liElement > 4){
        alert('You can not select more than 5 players');
        return;
    }
    liElement++;
    const getName = getText('tavez-name');
    setLiItem('li1',getName);
    this.disabled = true;
})
document.getElementById('btn-aguera').addEventListener('click', function(){
    if(liElement > 4){
        alert('You can not select more than 5 players');
        return;
    }
    liElement++;
    const getName = getText('aguero-name');
    setLiItem('li1',getName);
    this.disabled = true;
})
document.getElementById('btn-mbappe').addEventListener('click', function(){
    if(liElement > 4){
        alert('You can not select more than 5 players');
        return;
    }
    liElement++;
    const getName = getText('mbappe-name');
    setLiItem('li1',getName);
    this.disabled = true;
})


//calculation button
document.getElementById('btn-player-calc').addEventListener('click', function(){
    const playerCost = getInputFeildValue('player-cost');
    const playerCostCal = playerCost * liElement;
    if(isNaN(playerCost)){
        alert('Input a valid Number')
    }
    else{
       setTextValue('player-cost-value',playerCostCal);
   }
    
})

document.getElementById('btn-total-cal').addEventListener('click', function(){
    const totalPlayerCost = getTextValue('player-cost-value');
    const totalManagerCost = getInputFeildValue('manager-cost');
    const totalCoachCost = getInputFeildValue('coach-cost');
    const allCost = totalPlayerCost + totalManagerCost + totalCoachCost;
    if(isNaN(totalManagerCost,totalCoachCost)){
        alert('Input a valid Number')
    }
    else{      
        setTextValue('all-cost', allCost);
   }
})


