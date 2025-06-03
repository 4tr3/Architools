'use strict';

document.querySelector("#calc-button").addEventListener('click', function(){
    const tests = testUserInputs();
    if(tests[0]){
        calcScale(tests[1], tests[2]);
    }
})

function testUserInputs(){
    const root = (Math.round(Number(document.querySelector("#rooting-scale").value.replace(",","."))*1000))/1000;
    const target = (Math.round(Number(document.querySelector("#target-scale").value.replace(",","."))*1000))/1000;
    document.querySelector("#rooting-scale").value = root;
    document.querySelector("#target-scale").value = value;
    console.log(root);
    console.log(target);

    if(!(root >= 1) || !(target >= 1)){
        document.querySelector("#alert").textContent= "ungültige Eingabe. Bitte gebe eine positive Zahl ein"
        return [false];
    }
    else{
         document.querySelector("#alert").textContent= ""
         return [true, root, target];
    }
}

function calcScale(root, target){
    // Umrechnungsfaktoraktor wird aus Input "rooting scale" und "target-scale errechnet
    const factor = root/target;
    //Input wird mit dem Faktor verrechnet und in result ausgegeben
    document.querySelector('#result').textContent=document.querySelector('#scale-input').value*factor;
}
