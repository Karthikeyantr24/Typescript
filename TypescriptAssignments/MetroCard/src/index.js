"use strict";
let autoIncreamentCardNumber = 1000;
let autoIncreamentTravelId = 2000;
let autoIncreamentTicketId = 3000;
let newUserNameStatus = false;
let newUserPhoneStatus = false;
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
    DeductBalance(deductBalance) {
        this.Balance -= deductBalance;
        return this.Balance;
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
TravelDetailsList.push(new TravelDetails("CMRL1001", "Airport", "Egmore", new Date(2023 - 10 - 10), 55));
TravelDetailsList.push(new TravelDetails("CMRL1001", "Egmore", "Koyambedu", new Date(2023 - 10 - 10), 32));
TravelDetailsList.push(new TravelDetails("CMRL1002", "Alandur", "Koyambedu", new Date(2023 - 11 - 10), 25));
TravelDetailsList.push(new TravelDetails("CMRL1002", "Egmore", "Thirumangalm", new Date(2023 - 11 - 10), 25));
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
    homePage.style.display = "none";
    newUserPage.style.display = "block";
}
function checkNewUserName(paramNewUserName) {
    let newUserName = document.getElementById('newUsername').value;
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
    let newUserPhoneMessage = document.getElementById('newuserMessage');
    let newUserPhoneRegex = /^([6-9])(\d{9})$/;
    if (newUserPhoneRegex.test(newUserPhone)) {
        newUserPhoneStatus = true;
        newUserPhoneMessage.style.visibility = "hidden";
    }
    else {
        newUserNameStatus = false;
        newUserPhoneMessage.innerHTML = "Please enter valid Phone number";
        newUserPhoneMessage.style.visibility = "visible";
        newUserPhoneMessage.style.color = "tomato";
    }
}
