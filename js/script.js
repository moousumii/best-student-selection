let selectedStudents = [];

function selectStudent(studentName){
    let studentList = document.getElementById("studentsList");
    let list = document.createElement("li");
    list.innerHTML = `<span class="text-gray-900 font-normal">${studentName}</span>`;
    if(selectedStudents.length !== 5) {
        selectedStudents.push(list);
    }
    for(let i = 0; i < 5; i++){
        studentList.appendChild(selectedStudents[i]);
    }
}


function yusufRichard(){
    let btn = document.getElementById("yusufRichard");
    if(selectedStudents.length >= 5) {
    alert("You can select upto 5 students only!");
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(59 130 246)"
    }
    selectStudent("Yusuf Richard");
}

function tyreseMata(){
    let btn = document.getElementById("tyreseMata");
    if(selectedStudents.length >= 5) {
    alert("You can select upto 5 students only!");
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(59 130 246)"
    }
    selectStudent("Tyrese Mata");
}

function shaylaLivingston(){
    let btn = document.getElementById("shaylaLivingston");
    if(selectedStudents.length >= 5) {
    alert("You can select upto 5 students only!");
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(59 130 246)"
    }
    selectStudent("Shayla Livingston");
}

function gavynMclean(){
    let btn = document.getElementById("gavynMclean");
    if(selectedStudents.length >= 5) {
    alert("You can select upto 5 students only!");
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(59 130 246)"
    }
    selectStudent("Gavyn Mclean");
}

function linaPage(){
    let btn = document.getElementById("linaPage");
    if(selectedStudents.length >= 5) {
    alert("You can select upto 5 students only!");
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(59 130 246)"
    }
    selectStudent("Lina Page");
}

function cashPitts(){
    let btn = document.getElementById("cashPitts");
    if(selectedStudents.length >= 5) {
    alert("You can select upto 5 students only!");
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(59 130 246)"
    }
    selectStudent("Cash Pitts");
}

function dominickBall(){
    let btn = document.getElementById("dominickBall");
    if(selectedStudents.length >= 5) {
    alert("You can select upto 5 students only!");
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(59 130 246)"
    }
    selectStudent("Dominick Ball");
}

function samaraMata(){
    let btn = document.getElementById("samaraMata");
    if(selectedStudents.length >= 5) {
    alert("You can select upto 5 students only!");
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(59 130 246)"
    }
    selectStudent("Samara Mata");
}

function evaAbbott(){
    let btn = document.getElementById("evaAbbott");
    if(selectedStudents.length >= 5) {
    alert("You can select upto 5 students only!");
    }
    else{
        btn.disabled = true;
        btn.style.backgroundColor = "rgb(59 130 246)"
    }
    selectStudent("Eva Abbott");
}

function calcvoucher(){
    const perVoucher = document.getElementById("giftVoucher").value;
    const totalVoucherCost = document.getElementById("voucherCost");
    totalVoucherCost.innerText = selectedStudents.length * parseFloat(perVoucher);
}

function calcTotal(){
    const perVoucher = document.getElementById("giftVoucher").value;
    const travelTicketCost = document.getElementById("travelTicket").value;
    const airbnbCost = document.getElementById("airbnb").value;
    const totalCost = document.getElementById("totalCost");
    totalCost.innerText = selectedStudents.length * parseFloat(perVoucher) + parseFloat(travelTicketCost) + parseFloat(airbnbCost);
}