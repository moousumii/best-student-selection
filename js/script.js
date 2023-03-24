/* Common Functions */

let selectedStudents = [];

function selectStudent(elementID, selectStudentName){
    let btn = document.getElementById(elementID);
    let studentName = document.getElementById(selectStudentName).innerText;
    let studentList = document.getElementById('studentsList');
    let list = document.createElement("li");
    list.innerHTML = `<span class="text-gray-900 font-normal">${studentName}</span>`;
    if(selectedStudents.length !== 5) {
        selectedStudents.push(list);
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(59 130 246)"
    }
    else{
        alert("You can select upto 5 students only!");
    }

    for(let i = 0; i < 5; i++){
        studentList.appendChild(selectedStudents[i]);
    }
}

function getInputValue(inputID){
    const inputElement = document.getElementById(inputID);
    const inputElementString = inputElement.value;
    const inputValue = parseFloat(inputElementString);

    if(isNaN(inputValue)) {
        alert("Please Enter Number Value!");
        inputElementString = '';
        return;
    }
    return inputValue;
}


/* Student Selection */

document.getElementById('yusufRichard').addEventListener('click', function(){
    selectStudent('yusufRichard', 'nameYusuf');
})
document.getElementById('tyreseMata').addEventListener('click', function(){
    selectStudent('tyreseMata', 'nameTyrese');
})
document.getElementById('shaylaLivingston').addEventListener('click', function(){
    selectStudent('shaylaLivingston', 'nameShayla');
})
document.getElementById('gavynMclean').addEventListener('click', function(){
    selectStudent('gavynMclean', 'nameGavyn');
})
document.getElementById('linaPage').addEventListener('click', function(){
    selectStudent('linaPage', 'nameLina');
})
document.getElementById('cashPitts').addEventListener('click', function(){
    selectStudent('cashPitts', 'nameCash');
})
document.getElementById('dominickBall').addEventListener('click', function(){
    selectStudent('dominickBall', 'nameDominick');
})
document.getElementById('samaraMata').addEventListener('click', function(){
    selectStudent('samaraMata', 'nameSamara');
})
document.getElementById('evaAbbott').addEventListener('click', function(){
    selectStudent('evaAbbott', 'nameEva');
})


/* Calculation */

document.getElementById('calcCoupon').addEventListener('click', function(){
    const perCoupon = getInputValue('giftCoupon');
    const totalCouponCost = document.getElementById('couponCost');
    totalCouponCost.innerText = selectedStudents.length * perCoupon;
})

function calcTotal(){
    const totalCouponCost = document.getElementById('couponCost');
    const totalCouponCostString = totalCouponCost.innerText;
    const couponCost = parseFloat(totalCouponCostString);

    const tourGuideCost = getInputValue('tourGuide');
    const airbnbCost = getInputValue('airbnb');

    const totalCost = document.getElementById('totalCost');
    totalCost.innerText = couponCost + tourGuideCost + airbnbCost;
}