'use strict'


let donatores = [];
function Donation(donatorName, donationAmount, age) {
    this.donatorName = donatorName;
    this.donationAmount = donationAmount;
    this.age = age;
    donatores.push(this);
}

// from w3school
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let form = document.getElementById('form');
form.addEventListener('submit', submeter);


function submeter(event) {
    event.preventDefault();
    // location.reload();
    let donator = event.target.DonatorName.value;
    let amount = event.target.DonationAmount.value;
    let newDonation = new Donation(donator, amount)
    goLocal();
}

let myTable = document.getElementById('table');
function tableHeader() {
    let trHead = document.createElement('tr');
    myTable.appendChild(trHead);
    let fistTHead = document.createElement('th');
    let secTHead = document.createElement('th');
    let thrdTHead = document.createElement('th');

    trHead.appendChild(fistTHead);
    trHead.appendChild(secTHead);
    trHead.appendChild(thrdTHead);

    fistTHead.textContent = 'Donator Name';
    secTHead.textContent = 'Donation Amount';
    thrdTHead.textContent = 'age';

    tableBody();
}
tableHeader();

function tableBody() {
    for (let i = 0; i < donatores.length; i++) {


        let trBody = document.createElement('tr');
        myTable.appendChild(trBody);
        let fistTD = document.createElement('td');
        let secTD = document.createElement('td');
        let thrdTD = document.createElement('td');

        trBody.appendChild(fistTD);
        trBody.appendChild(secTD);
        trBody.appendChild(thrdTD);

        fistTD.textContent = donatores.donatorName;
        secTD.textContent = donatores.donationAmount;
        thrdTD.textContent = getRndInteger(20, 60);
        // console.log(secTD);
    }
}
console.log(tableBody()); 

function goLocal() {
    let string = JSON.stringify(donatores);
    localStorage.setItem('allDonation', string);

}

function outLocal() {
    let outLocal = localStorage.getItem('allDonation');
    let outstring=JSON.parse(outLocal);
    if (outstring!==null) {
        for (let j = 0; j < outstring.length; j++) {
            
            let donater=new Donation(outstring[j].donatorName,outstring[j].donationAmount,outstring[j].age)
            
        }
        
    }

}
tableBody();
outLocal();