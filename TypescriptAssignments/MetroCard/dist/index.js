"use strict";
let autoIncreamentCardNumber = 1000;
let autoIncreamentTravelId = 2000;
let autoIncreamentTicketId = 3000;
let newUserNameStatus = false;
let newUserPhoneStatus = false;
let currentLoggedInUser;
class PersonalDetails {
    constructor(paramUserName, paramPhoneNumber) {
        this.UserName = paramUserName;
        this.PhoneNumber = paramPhoneNumber;
    }
}
class UserDetails extends PersonalDetails {
    constructor(UserName, PhoneNumber) {
        super(UserName, PhoneNumber);
        autoIncreamentCardNumber++;
        this.CardNumber = "CMRL" + autoIncreamentCardNumber.toString();
        this.Balance = 0;
    }
    WalletRecharge(rechargeAmount) {
        this.Balance += rechargeAmount;
        return this.Balance;
    }
    showBalance() {
        return this.Balance;
    }
    DeductBalance(deductBalance) {
        this.Balance -= deductBalance;
    }
}
class TravelDetails {
    constructor(paramCardNumber, paramFromLocation, paramToLocation, paramDate, paramTravelCost) {
        autoIncreamentTravelId++;
        this.TravelId = "TID" + autoIncreamentTravelId.toString();
        this.CardNumber = paramCardNumber;
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.Date = paramDate;
        this.TravelCost = paramTravelCost;
    }
}
class TicketFairDetails {
    constructor(paramFromLocation, paramToLocation, paramTicketPrice) {
        autoIncreamentTicketId++;
        this.TicketId = "MR" + autoIncreamentTicketId.toString();
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.TicketPrice = paramTicketPrice;
    }
}
let UserDetailsList = new Array();
UserDetailsList.push(new UserDetails("Ravi", "9848812345"));
UserDetailsList.push(new UserDetails("Baskaran", "9948854321"));
let TravelDetailsList = new Array();
TravelDetailsList.push(new TravelDetails("CMRL1001", "Airport", "Egmore", new Date(2023, 10, 10), 55));
TravelDetailsList.push(new TravelDetails("CMRL1001", "Egmore", "Koyambedu", new Date(2023, 10, 10), 32));
TravelDetailsList.push(new TravelDetails("CMRL1002", "Alandur", "Koyambedu", new Date(2023, 11, 10), 25));
TravelDetailsList.push(new TravelDetails("CMRL1002", "Egmore", "Thirumangalm", new Date(2023, 11, 10), 25));
let TicketFairDetailsList = new Array();
TicketFairDetailsList.push(new TicketFairDetails("Airport", "Egmore", 55));
TicketFairDetailsList.push(new TicketFairDetails("Airport", "Koyambedu", 25));
TicketFairDetailsList.push(new TicketFairDetails("Alandur", "Koyambedu", 25));
TicketFairDetailsList.push(new TicketFairDetails("Koyambedu", "Egmore", 32));
TicketFairDetailsList.push(new TicketFairDetails("Vadapalani", "Egmore", 45));
TicketFairDetailsList.push(new TicketFairDetails("Arumbakam", "Egmore", 25));
TicketFairDetailsList.push(new TicketFairDetails("Vadapalani", "Koyambedu", 25));
TicketFairDetailsList.push(new TicketFairDetails("Arumbakam", "Koyambedu", 16));
function newUserPage() {
    let newUserPage = document.getElementById('newUserPage');
    let homePage = document.getElementById('homePage');
    let existingUserPage = document.getElementById('existingUserPage');
    homePage.style.display = "block";
    newUserPage.style.display = "block";
    existingUserPage.style.display = "none";
}
function checkNewUserName(paramNewUserName) {
    let newUserName = document.getElementById('newUserName').value;
    let newUserNameMessage = document.getElementById('newUserNameMessage');
    let newUserNameRegex = /^[a-zA-z]{3,20}$/;
    if (newUserNameRegex.test(newUserName)) {
        newUserNameStatus = true;
        newUserNameMessage.style.visibility = "hidden";
    }
    else {
        newUserNameStatus = false;
        newUserNameMessage.innerHTML = "Please enter valid Username";
        newUserNameMessage.style.visibility = "visible";
        newUserNameMessage.style.color = "tomato";
    }
}
function checkNewUserPhone(paramNewUserPhone) {
    let newUserPhone = document.getElementById('newUserPhone').value;
    let newUserPhoneMessage = document.getElementById('newUserPhoneMessage');
    let newUserPhoneRegex = /^([6-9])(\d{9})$/;
    if (newUserPhoneRegex.test(newUserPhone)) {
        newUserPhoneStatus = true;
        newUserPhoneMessage.style.visibility = "hidden";
    }
    else {
        newUserPhoneStatus = false;
        newUserPhoneMessage.innerHTML = "Please enter valid Phone number";
        newUserPhoneMessage.style.visibility = "visible";
        newUserPhoneMessage.style.color = "tomato";
    }
}
function signUp() {
    if (newUserNameStatus == true && newUserPhoneStatus == true) {
        let newUserName = document.getElementById('newUserName').value;
        let newUserPhone = document.getElementById('newUserPhone').value;
        let newUserName1 = document.getElementById('newUserName');
        let newUserPhone1 = document.getElementById('newUserPhone');
        let newUser = new UserDetails(newUserName, newUserPhone);
        UserDetailsList.push(newUser);
        alert(`Welcome ${newUser.UserName}. Your Card Number is ${newUser.CardNumber} `);
        newUserName1.value = "";
        newUserPhone1.value = "";
        displayHomePage();
    }
}
function displayHomePage() {
    let newUserPage = document.getElementById('newUserPage');
    let homePage = document.getElementById('homePage');
    newUserPage.style.display = "none";
    homePage.style.display = "block";
}
function existingUserPage() {
    let existingUserPage = document.getElementById('existingUserPage');
    let homePage = document.getElementById('homePage');
    homePage.style.display = "block";
    existingUserPage.style.display = "block";
}
function signIn() {
    let cardNumberChecker = false;
    let existingCardNumber = document.getElementById('existingCardNumber').value;
    let existingCardNumberRegex = /CMRL1\d{3}/;
    if (existingCardNumberRegex.test(existingCardNumber)) {
        for (let i = 0; i < UserDetailsList.length; i++) {
            if (UserDetailsList[i].CardNumber == existingCardNumber) {
                currentLoggedInUser = UserDetailsList[i];
                mainMenu();
                return;
            }
            else {
                cardNumberChecker = true;
            }
        }
        if (cardNumberChecker) {
            alert('Enter valid Card Number');
        }
    }
    else {
        alert('Enter valid Card Number');
    }
}
function mainMenu() {
    let mainMenu = document.getElementById('mainMenu');
    let existingUserPage = document.getElementById('existingUserPage');
    let homePage = document.getElementById('homePage');
    mainMenu.style.display = "block";
    existingUserPage.style.visibility = "hidden";
    homePage.style.visibility = "hidden";
}
function balanceCheck() {
    let mainMenu = document.getElementById('mainMenu');
    let balanceCheck = document.getElementById('balanceCheck');
    let viewBalance = document.getElementById('viewBalance');
    let recharge = document.getElementById('recharge');
    let viewTravelHistory = document.getElementById('viewTravelHistory');
    let travel = document.getElementById('travel');
    mainMenu.style.display = "block";
    balanceCheck.style.display = "block";
    recharge.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
    let currentBalance = currentLoggedInUser.Balance;
    viewBalance.innerHTML = 'Your Current Balance : ' + currentBalance;
}
function recharge() {
    let mainMenu = document.getElementById('mainMenu');
    let balanceCheck = document.getElementById('balanceCheck');
    let recharge = document.getElementById('recharge');
    let viewTravelHistory = document.getElementById('viewTravelHistory');
    let travel = document.getElementById('travel');
    recharge.style.display = "block";
    mainMenu.style.display = "block";
    balanceCheck.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
}
function rechargeBtn() {
    let rechargeAmount = document.getElementById('rechargeAmount').value;
    let inputArea = document.getElementById('rechargeAmount');
    currentLoggedInUser.WalletRecharge(parseInt(rechargeAmount));
    alert('Recharge Successfully');
    inputArea.value = "";
}
function viewTravelHistory() {
    let mainMenu = document.getElementById('mainMenu');
    let balanceCheck = document.getElementById('balanceCheck');
    let recharge = document.getElementById('recharge');
    let viewTravelHistory = document.getElementById('viewTravelHistory');
    let travelDetailsTable = document.getElementById('travelDetailsTable');
    let travel = document.getElementById('travel');
    recharge.style.display = "none";
    mainMenu.style.display = "block";
    balanceCheck.style.display = "none";
    viewTravelHistory.style.display = "block";
    travel.style.display = "none";
    let flag = false;
    TravelDetailsList.forEach(element => {
        if (element.CardNumber == currentLoggedInUser.CardNumber) {
            travelDetailsTable.innerHTML = `<tr><th>Travel ID</th><th>CardNumber</th><th>FromLocation</th><th>ToLocation</th><th>Date</th><th>TravelCost</th></tr>`;
            flag = true;
        }
    });
    TravelDetailsList.forEach(element => {
        if (element.CardNumber == currentLoggedInUser.CardNumber) {
            travelDetailsTable.innerHTML += `<tr><td>${element.TravelId}</td><td>${element.CardNumber}</td><td>${element.FromLocation}</td><td>${element.ToLocation}</td><td>${element.Date.toLocaleDateString()}</td><td>${element.TravelCost}</td></tr>`;
        }
    });
    if (!flag) {
        alert('Not yet travel');
        viewTravelHistory.style.display = "none";
    }
}
function travel() {
    let mainMenu = document.getElementById('mainMenu');
    let balanceCheck = document.getElementById('balanceCheck');
    let recharge = document.getElementById('recharge');
    let viewTravelHistory = document.getElementById('viewTravelHistory');
    let travel = document.getElementById('travel');
    let ticketFairTable = document.getElementById('ticketFairTable');
    recharge.style.display = "none";
    mainMenu.style.display = "block";
    balanceCheck.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "block";
    ticketFairTable.innerHTML = `<tr><th>TicketID</th><th>FromLocation</th><th>ToLocation</th><th>Fair</th></tr>`;
    TicketFairDetailsList.forEach(element => {
        ticketFairTable.innerHTML += `<tr><td>${element.TicketId}</td><td>${element.FromLocation}</td><td>${element.ToLocation}</td><td>${element.TicketPrice}</td></tr>`;
    });
}
function ticketIdToBook() {
    let mainMenu = document.getElementById('mainMenu');
    let ticketIdInput = document.getElementById('ticketIdInput').value;
    let inputTicketId = document.getElementById('ticketIdInput');
    let ticketIdInputRegex = /MR300[1-8]/;
    let lowBalance = false;
    if (ticketIdInputRegex.test(ticketIdInput)) {
        TicketFairDetailsList.forEach(element => {
            if (element.TicketId == ticketIdInput) {
                if (element.TicketPrice < currentLoggedInUser.Balance) {
                    currentLoggedInUser.DeductBalance(element.TicketPrice);
                    TravelDetailsList.push(new TravelDetails(currentLoggedInUser.CardNumber, element.FromLocation, element.ToLocation, new Date(), element.TicketPrice));
                    alert('Happy Journey!');
                    inputTicketId.value = "";
                }
                else {
                    lowBalance = true;
                }
            }
        });
    }
    else {
        alert('Invalid Ticket ID');
    }
    if (lowBalance) {
        alert("Kindly recharge to book your ticket");
    }
}
function exit() {
    let exit = document.getElementById('exit');
    let mainMenu = document.getElementById('mainMenu');
    let balanceCheck = document.getElementById('balanceCheck');
    let recharge = document.getElementById('recharge');
    let viewTravelHistory = document.getElementById('viewTravelHistory');
    let travel = document.getElementById('travel');
    recharge.style.display = "none";
    mainMenu.style.display = "none";
    balanceCheck.style.display = "none";
    viewTravelHistory.style.display = "none";
    travel.style.display = "none";
    let homePage = document.getElementById('homePage');
    homePage.style.display = "block";
}
