"use strict";
//Auto-Increament values
let UserIdAutoIncrement = 1000;
let MedicineIDAutoIncreament = 2000;
let OrderIDAutoIncreament = 3000;
let NewUserNameStatus = false;
let NewUserEmailStatus = false;
let NewUserPasswordStatus = false;
let NewUserConfirmPasswordStatus = false;
let NewUserPhoneStatus = false;
let CurrentEmailId;
let CurrentUserName;
let CurrentLoggedInUser;
//Class 
class UserDetails {
    constructor(paramUsername, paramEmail, paramPassword, paramConfirmPassword, paramPhoneNumber) {
        UserIdAutoIncrement++;
        this.UserId = "UI" + UserIdAutoIncrement.toString(),
            this.UserName = paramUsername,
            this.Email = paramEmail,
            this.Password = paramPassword,
            this.ConfirmPassword = paramConfirmPassword,
            this.PhoneNumber = paramPhoneNumber;
        this.Balance = 0;
    }
    topUpAmount(rechargeAmount) {
        this.Balance += rechargeAmount;
    }
    walletBalance() {
        return `Your Current Balance : ${this.Balance}`;
    }
    deduct(deductBalance) {
        this.Balance -= deductBalance;
    }
}
class MedicineInfo {
    constructor(paramMedicineName, paramMedicinePrice, paramMedicineCount, paramExpiryDate) {
        MedicineIDAutoIncreament++;
        this.MedicineId = "MID" + MedicineIDAutoIncreament.toString(),
            this.MedicineName = paramMedicineName,
            this.MedicinePrice = paramMedicinePrice,
            this.MedicineCount = paramMedicineCount,
            this.ExpiriyDate = paramExpiryDate;
    }
}
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["ordered"] = "ordered";
    OrderStatus["cancelled"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
class OrderInfo {
    constructor(paramMedicineId, paramUserId, paramMedicineName, paramMedicineCount, paramTotalPrice, paramOrderStatus) {
        OrderIDAutoIncreament++;
        this.OrderId = "OI" + OrderIDAutoIncreament.toString();
        this.MedicineId = paramMedicineId;
        this.UserId = paramUserId;
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.TotalPrice = paramTotalPrice;
        this.OrderStatus = paramOrderStatus;
    }
}
//adding into list
let UserArrayList = new Array();
UserArrayList.push(new UserDetails("Guna", "guna@gmail.com", "12345", "12345", "9876543210"));
UserArrayList.push(new UserDetails("Dhana", "dhana@gmai.com", "12345", "12345", "9876543210"));
let MedicineList = new Array();
MedicineList.push(new MedicineInfo("Paracetomol", 50, 5, new Date("2023-12-19")));
MedicineList.push(new MedicineInfo("Colpal", 60, 5, new Date("2023-12-1")));
MedicineList.push(new MedicineInfo("Stepsil", 70, 5, new Date("2023-11-19")));
MedicineList.push(new MedicineInfo("Iodex", 80, 5, new Date("2024-01-19")));
MedicineList.push(new MedicineInfo("Acetherol", 100, 5, new Date("2024-03-19")));
let OrderList = new Array();
OrderList.push(new OrderInfo("MID2001", "UI1001", "Paracetomol", 2, 100, OrderStatus.ordered));
OrderList.push(new OrderInfo("MID2002", "UI1001", "Colpal", 2, 120, OrderStatus.ordered));
// //home page to sign up page
function newUserPage() {
    let homePage = document.getElementById('homePage');
    let newUserPage = document.getElementById('newUserPage');
    homePage.style.display = "none";
    newUserPage.style.display = "block";
}
// //sign up page
function signUp() {
    if (NewUserNameStatus == true &&
        NewUserEmailStatus == true &&
        // NewUserPasswordStatus==true&&
        // NewUserConfirmPasswordStatus==true&&
        NewUserPhoneStatus == true) {
        let newUserName = document.getElementById('newUserName').value;
        let newUserEmail = document.getElementById('newUserEmail').value;
        let newUserPassword = document.getElementById('newUserPassword').value;
        let newUserConfirmPassword = document.getElementById('newUserConfirmPassword').value;
        let newUserPhone = document.getElementById('newUserPhone').value;
        UserArrayList.push(new UserDetails(newUserName, newUserEmail, newUserPassword, newUserConfirmPassword, newUserPhone));
        displayHomePage();
    }
    else {
        alert("Please fill out the form fully.");
    }
}
//Check User Name
function checkNewUserName(paramNewUserName) {
    let newUserName = document.getElementById(paramNewUserName).value;
    let newUserNameMessage = document.getElementById(paramNewUserName + "Message");
    let newUserNameRegex = /^[a-zA-z]{3,20}$/;
    if (newUserNameRegex.test(newUserName)) {
        NewUserNameStatus = true;
        newUserNameMessage.style.visibility = "hidden";
    }
    else {
        NewUserNameStatus = false;
        newUserNameMessage.innerHTML = "Please enter valid name";
        newUserNameMessage.style.visibility = "visible";
        newUserNameMessage.style.color = "tomato";
    }
}
//Check email id
function checkNewUserEmail(paramNewUserEmail) {
    let newUserEmail = document.getElementById(paramNewUserEmail).value;
    let newUserEmailMessage = document.getElementById(paramNewUserEmail + "Message");
    let newUserEmailRegex = /^([a-z0-9\.-]+)@([a-z]+).([a-z]{2,8})$/;
    if (newUserEmailRegex.test(newUserEmail)) {
        NewUserEmailStatus = true;
        newUserEmailMessage.style.visibility = "hidden";
    }
    else {
        NewUserEmailStatus = false;
        newUserEmailMessage.innerHTML = "Please enter valid email id";
        newUserEmailMessage.style.color = "tomato";
    }
}
//   var validPassword ="";
//  //check password
//  function checkNewUserPassword(paramNewUserPassword : string)
// {
//     let newUserPassword = (document.getElementById(paramNewUserPassword) as HTMLInputElement).value;
//     let newUserPasswordMessage = document.getElementById(paramNewUserPassword +"Message") as HTMLLabelElement;
//     let newUserPasswordRegex = /^([a-zA-z0-9]){6,15}/;
//     if(newUserPasswordRegex.test(newUserPassword)){
//         NewUserPasswordStatus = true;
//         validPassword = newUserPassword;
//         newUserPasswordMessage.style.visibility ="hidden";
//     }
//     else{
//         NewUserPasswordStatus = false;
//         newUserPasswordMessage.innerHTML = "Please enter valid password";
//         newUserPasswordMessage.style.color = "tomato";
//     }
// }
// //check confirm password
// function checkNewUserConfirmPassword(paramNewUserConfirmPassword : string)
// {
//     let newUserConfirmPassword = (document.getElementById(paramNewUserConfirmPassword) as HTMLInputElement).value;
//     let newUserConfirmPasswordMessage = document.getElementById(newUserConfirmPassword + "Message") as HTMLLabelElement;
//     if(validPassword == paramNewUserConfirmPassword){
//         NewUserConfirmPasswordStatus = true;
//         newUserConfirmPasswordMessage.style.visibility = "hidden";
//     }
//     else{
//         NewUserConfirmPasswordStatus = false;
//         newUserConfirmPasswordMessage.innerHTML = "Please enter valid password";
//         newUserConfirmPasswordMessage.style.color = "tomato";
//     }
function checkNewUserPhone(paramNewuserPhone) {
    let newUserPhone = document.getElementById(paramNewuserPhone).value;
    let newUserPhoneMessage = document.getElementById(paramNewuserPhone + "Message");
    let newUserPhoneRegex = /^([6-9])(\d{9})$/;
    if (newUserPhoneRegex.test(newUserPhone)) {
        NewUserPhoneStatus = true;
        newUserPhoneMessage.style.visibility = "hidden";
    }
    else {
        NewUserPhoneStatus = false;
        newUserPhoneMessage.innerHTML = "Please enter valid Phone Number";
        newUserPhoneMessage.style.color = "tomato";
    }
}
function displayHomePage() {
    // CurrentUserId = "";
    // CurrentUserName = "";
    let newUserPage = document.getElementById("newUserPage");
    let existingUserPage = document.getElementById("existingUserPage");
    let homePage = document.getElementById("homePage");
    newUserPage.style.display = "none";
    //existingUserPage.style.display = "none";
    homePage.style.display = "block";
}
function existingUserPage() {
    let homePage = document.getElementById('homePage');
    let existingUserPage = document.getElementById('existingUserPage');
    homePage.style.display = "none";
    existingUserPage.style.display = "block";
}
function signIn() {
    let noExistingEmailIdChecker = false;
    let existingEmailId = document.getElementById("existingEmailId").value;
    // let newUserPage = (document.getElementById("newUserPage") as HTMLDivElement);
    // let existingUserPage = (document.getElementById("existingUserPage") as HTMLDivElement);
    // // let homePage = (document.getElementById("homePage") as HTMLDivElement);
    // let mainMenu = document.getElementById("mainMenu") as HTMLDivElement;
    let existingEmailIdRegex = /^([a-z0-9\.-]+)@([a-z]+).([a-z]{2,8})$/;
    // existingUserPage.style.display="block";
    if (existingEmailIdRegex.test(existingEmailId)) {
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].Email == existingEmailId) {
                CurrentEmailId = UserArrayList[i].Email;
                CurrentUserName = UserArrayList[i].UserName;
                CurrentLoggedInUser = UserArrayList[i];
                // mainMenu.style.display="block";
                // existingUserPage.style.display="none";
                mainMenu();
                return;
            }
            else {
                noExistingEmailIdChecker = true;
            }
        }
        if (noExistingEmailIdChecker) {
            alert("Enter valid User Id");
        }
    }
    else {
        alert("Enter valid User Id");
    }
}
function mainMenu() {
    let mainMenu = document.getElementById('mainMenu');
    let existingUserPage = document.getElementById('existingUserPage');
    mainMenu.style.display = "block";
    existingUserPage.style.display = "none";
}
function home() {
    // var homeBack = document.getElementById('home-back') as HTMLButtonElement;
    let home1 = document.getElementById('home1');
    let mainMenu = document.getElementById('mainMenu');
    let purchase = document.getElementById('purchase');
    let medicineDetails = document.getElementById('medicineDetails');
    let cancel = document.getElementById('cancel');
    cancel.style.display = "none";
    medicineDetails.style.display = "none";
    purchase.style.display = "none";
    mainMenu.style.display = "block";
    home1.style.display = "block";
    home1.innerHTML = `<h3>Hi ${CurrentUserName}. Welcomes You !!!!<h3>`;
    // homeBack.style.display="block";
}
// function back(){
//     let mainMenu = document.getElementById('mainMenu')as HTMLDivElement;
//     let homeBack = (document.getElementById('home-back') as HTMLDivElement);
//     mainMenu.style.display = "block";
//     homeBack.style.display="none";
// }
var row = 0;
function medicineDetails() {
    // let mainMenu = document.getElementById('mainMenu') as HTMLDivElement;
    let medicineDetails = document.getElementById('medicineDetails');
    let tdMedicine = document.getElementById('tdMedicine');
    let home1 = document.getElementById('home1');
    let mainMenu = document.getElementById('mainMenu');
    let orderHistory = document.getElementById('orderHistory');
    let purchase = document.getElementById('purchase');
    purchase.style.display = "none";
    orderHistory.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    showBalance.style.display = "none";
    let topUpPage1 = document.getElementById('topUpPage1');
    let topUpPage = document.getElementById('topUpPage');
    let cancel = document.getElementById('cancel');
    let addBtnDisplay = document.getElementById('addBtnDisplay');
    let deleteDiv = document.getElementById('deleteDiv');
    deleteDiv.style.display = "none";
    addBtnDisplay.style.display = "none";
    let addBtn = document.getElementById('addBtn');
    addBtn.style.display = "block";
    cancel.style.display = "none";
    topUpPage.style.display = "none";
    topUpPage1.style.display = "none";
    mainMenu.style.display = "block";
    home1.style.display = "none";
    medicineDetails.style.display = "block";
    let editn = 0;
    let deleten = 0;
    let x = 1;
    tdMedicine.innerHTML = "null";
    tdMedicine.innerHTML = `<tr><th>S.No</th><th>Medicine Name</th><th>Medicine Price</th><th>Medicine Count</th><th>Expiry Date</th><th>Operation</th></tr>`;
    MedicineList.forEach(element => {
        tdMedicine.innerHTML += `<tr><td>${x++}</td><td>${element.MedicineName}</td><td>${element.MedicinePrice}</td><td>${element.MedicineCount}</td><td>${element.ExpiriyDate.toLocaleDateString()}</td><td><button  onclick="editBtn(${editn++})">Edit</button><br><br><button  onclick="deleteBtn(${deleten++})">Delete</button></td></tr>`;
        row = x;
    });
}
var i = 0;
// function editBtn(index:number){
//     let editBtnDisplay  = document.getElementById('editBtnDisplay') as HTMLDivElement;
//     let editBtnSubmit  = document.getElementById('editBtnSubmit') as HTMLDivElement;
//     let editMedicineName =(document.getElementById('editMedicineName') as HTMLInputElement);
//     let editMedicinePrice =(document.getElementById('editMedicinePrice') as HTMLInputElement);
//     let editMedicineCount =(document.getElementById('editMedicineCount') as HTMLInputElement);
//     let editMedicineExpiryDate =(document.getElementById('editMedicineExpiryDate') as HTMLInputElement);
//     editBtnDisplay.style.display="block";
//     editBtnSubmit.style.display="block";
//     editMedicineName.style.display="block";
//     editMedicinePrice.style.display="block";
//     editMedicineCount.style.display="block";
//     editMedicineExpiryDate.style.display="block";
//     i=index;
//     editMedicineName.value="";
//     editMedicinePrice.value="";
//     editMedicineCount.value="";
//     editMedicineExpiryDate.value="";
//     editMedicineName.innerHTML = MedicineList[index].MedicineName;
//     editMedicinePrice.innerHTML=`${MedicineList[index].MedicinePrice}`;
//     editMedicineCount.innerHTML=`${MedicineList[index].MedicineCount}`;
//     editMedicineExpiryDate.innerHTML = `${MedicineList[index].ExpiriyDate}`;
// }
// function editBtnSubmit(){
//     let editMedicineName1 =(document.getElementById('editMedicineName') as HTMLInputElement);
//     let editMedicinePrice1 =(document.getElementById('editMedicinePrice') as HTMLInputElement);
//     let editMedicineCount1=(document.getElementById('editMedicineCount') as HTMLInputElement);
//     let editMedicineExpiryDate1 =(document.getElementById('editMedicineExpiryDate') as HTMLInputElement);
//     MedicineList[i].MedicineName = editMedicineName1.value;
//     MedicineList[i].MedicinePrice = parseInt(editMedicinePrice1.value);
//     MedicineList[i].MedicineCount = parseInt(editMedicineCount1.value);
//     MedicineList[i].ExpiriyDate = new Date(editMedicineExpiryDate1.value);
// }
function deleteBtn(index) {
    let deleteDiv = document.getElementById('deleteDiv');
    let deleteTable = document.getElementById('deleteTable');
    let medicineDetails = document.getElementById('medicineDetails');
    let tdMedicine = document.getElementById('tdMedicine');
    let mainMenu = document.getElementById('mainMenu');
    mainMenu.style.display = "block";
    // medicineDetails.style.display ="none";
    deleteDiv.style.display = "block";
    tdMedicine.style.display = "none";
    deleteTable.style.display = "block";
    let editn = 0;
    let deleten = 0;
    let x = 1;
    deleteTable.innerHTML = `<tr><th>S.No</th><th>Medicine Name</th><th>Medicine Price</th><th>Medicine Count</th><th>Expiry Date</th><th>Operation</th></tr>`;
    for (let i = 0; i < MedicineList.length; i++) {
        if (i != index) {
            deleteTable.innerHTML += `<tr><td>${x++}</td><td>${MedicineList[i].MedicineName}</td><td>${MedicineList[i].MedicinePrice}</td><td>${MedicineList[i].MedicineCount}</td><td>${MedicineList[i].ExpiriyDate.toLocaleDateString()}</td><td><button onclick="editBtn(${editn++})">Edit</button><br><br><button  onclick="deleteBtn(${deleten++})">Delete</button></td></tr>`;
        }
    }
}
function addBtn() {
    let addBtnDisplay = document.getElementById('addBtnDisplay');
    let addBtn = document.getElementById('addBtn');
    addBtnDisplay.style.display = "block";
    addBtn.style.display = "block";
}
function addBtnSubmit() {
    let tdMedicine = document.getElementById('tdMedicine');
    let addMedicineName = document.getElementById('addMedicineName').value;
    let addMedicinePrice = document.getElementById('addMedicinePrice').value;
    let addMedicineCount = document.getElementById('addMedicineCount').value;
    let addMedicineExpiryDate = document.getElementById('addMedicineExpiryDate').value;
    let addBtnDisplay = document.getElementById('addBtnDisplay');
    addBtnDisplay.style.display = "none";
    let addMedicineName1 = document.getElementById('addMedicineName');
    let addMedicinePrice1 = document.getElementById('addMedicinePrice');
    let addMedicineCount1 = document.getElementById('addMedicineCount');
    let addMedicineExpiryDate1 = document.getElementById('addMedicineExpiryDate');
    addMedicineName1.value = "";
    addMedicinePrice1.value = "";
    addMedicineCount1.value = "";
    addMedicineExpiryDate1.value = "";
    tdMedicine.innerHTML += `<tr><td>${row}</td><td>${addMedicineName}</td><td>${addMedicinePrice}</td><td>${addMedicineCount}</td><td>${new Date(addMedicineExpiryDate).toLocaleDateString()}</td><td><button id="edit${row}">Edit</button><br><br><button id="delete${row}">Delete</button></td></tr>`;
    row += 1;
    MedicineList.push(new MedicineInfo(addMedicineName, parseInt(addMedicinePrice), parseInt(addMedicineCount), new Date(addMedicineExpiryDate)));
}
function topUp() {
    let topUpPage = document.getElementById('topUpPage');
    let mainMenu = document.getElementById('mainMenu');
    let medicineDetails = document.getElementById('medicineDetails');
    let purchase = document.getElementById('purchase');
    let home1 = document.getElementById('home1');
    let orderHistory = document.getElementById('orderHistory');
    orderHistory.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    let cancel = document.getElementById('cancel');
    cancel.style.display = "none";
    showBalance.style.display = "none";
    mainMenu.style.display = "block";
    home1.style.display = "none";
    medicineDetails.style.display = "none";
    medicineDetails.style.display = "none";
    purchase.style.display = "none";
    topUpPage.style.display = "block";
}
function topUp1() {
    let amount = document.getElementById('amount').value;
    let topUpPage1 = document.getElementById('topUpPage1');
    let topUpPage = document.getElementById('topUpPage');
    let home1 = document.getElementById('home1');
    let mainMenu = document.getElementById('mainMenu');
    let medicineDetails = document.getElementById('medicineDetails');
    let orderHistory = document.getElementById('orderHistory');
    orderHistory.style.display = "none";
    let showBalance = document.getElementById('showBalance');
    let cancel = document.getElementById('cancel');
    cancel.style.display = "none";
    showBalance.style.display = "none";
    mainMenu.style.display = "block";
    home1.style.display = "none";
    topUpPage.style.display = "none";
    medicineDetails.style.display = "none";
    topUpPage.style.display = "none";
    topUpPage1.style.display = "block";
    UserArrayList.forEach(element => {
        if (element.Email == CurrentEmailId) {
            element.topUpAmount(parseInt(amount));
            var currentBalance = element.walletBalance();
            topUpPage1.innerHTML = currentBalance;
            alert("TopUp Sucessfully");
        }
    });
}
function showBalance() {
    let topUpPage = document.getElementById('topUpPage');
    let mainMenu = document.getElementById('mainMenu');
    let medicineDetails = document.getElementById('medicineDetails');
    let topUpPage1 = document.getElementById('topUpPage1');
    let showBalance1 = document.getElementById('showBalance1');
    let showBalance = document.getElementById('showBalance');
    let home1 = document.getElementById('home1');
    let orderHistory = document.getElementById('orderHistory');
    let cancel = document.getElementById('cancel');
    cancel.style.display = "none";
    orderHistory.style.display = "none";
    mainMenu.style.display = "block";
    home1.style.display = "none";
    medicineDetails.style.display = "none";
    topUpPage.style.display = "none";
    topUpPage1.style.display = "none";
    showBalance.style.display = "block";
    showBalance1.style.display = "block";
    UserArrayList.forEach(element => {
        if (element.Email == CurrentEmailId) {
            var currentBalance = element.walletBalance();
            showBalance1.innerHTML = currentBalance;
        }
    });
}
function orderHistory() {
    let topUpPage = document.getElementById('topUpPage');
    let mainMenu = document.getElementById('mainMenu');
    let medicineDetails = document.getElementById('medicineDetails');
    let topUpPage1 = document.getElementById('topUpPage1');
    let showBalance = document.getElementById('showBalance');
    let tdOrder = document.getElementById('tdOrder');
    let orderHistory = document.getElementById('orderHistory');
    let home1 = document.getElementById('home1');
    let purchase = document.getElementById('purchase');
    let cancel = document.getElementById('cancel');
    cancel.style.display = "none";
    purchase.style.display = "none";
    mainMenu.style.display = "block";
    topUpPage.style.display = "none";
    topUpPage1.style.display = "none";
    medicineDetails.style.display = "none";
    showBalance.style.display = "none";
    // tdOrder.style.display="block";
    home1.style.display = "none";
    purchase.style.display = "none";
    orderHistory.style.display = "block";
    tdOrder.innerHTML = "null";
    tdOrder.innerHTML = `<tr><th>Medicine ID</th><th>User ID</th><th>Medicine Name</th><th>Medicine Count</th><th>Order Status</th></tr>`;
    OrderList.forEach(element => {
        tdOrder.innerHTML += `<tr><td>${element.MedicineId}</td><td>${element.UserId}</td><td>${element.MedicineName}</td><td>${element.MedicineCount}</td><td>${element.OrderStatus}</tr>`;
    });
}
function purchase() {
    let medicineDetails = document.getElementById('medicineDetails');
    let purchase = document.getElementById('purchase');
    let tdPurchase = document.getElementById('tdPurchase');
    let home1 = document.getElementById('home1');
    let mainMenu = document.getElementById('mainMenu');
    let tdOrder = document.getElementById('tdOrder');
    let showBalance = document.getElementById('showBalance');
    let topUpPage1 = document.getElementById('topUpPage1');
    let topUpPage = document.getElementById('topUpPage');
    let cancel = document.getElementById('cancel');
    cancel.style.display = "none";
    topUpPage.style.display = "none";
    topUpPage1.style.display = "none";
    showBalance.style.display = "none";
    mainMenu.style.display = "block";
    home1.style.display = "none";
    medicineDetails.style.display = "none";
    purchase.style.display = "block";
    var n = 1;
    var x = 1;
    tdPurchase.innerHTML = "null";
    tdPurchase.innerHTML = `<tr><th>S.No</th><th>Medicine Name </th> <th>Medicine Price</th><th>Medicine Count</th><th>ExpiryDate</th><th>Buy</th></tr>`;
    MedicineList.forEach(element => {
        tdPurchase.innerHTML += `<tr><td>${x++}</td><td>${element.MedicineName}</td><td>${element.MedicinePrice}</td><td>${element.MedicineCount}</td><td>${element.ExpiriyDate.toLocaleDateString()}</td><td><button onclick="buy(${n++})">Buy</button"></td></tr>`;
    });
}
var indexBtn = 0;
function buy(index) {
    let buy = document.getElementById('buyCount');
    buy.style.display = "block";
    let countBtn = document.getElementById('countBtn');
    let medicineDetails = document.getElementById('medicineDetails');
    let purchase = document.getElementById('purchase');
    let tdPurchase = document.getElementById('tdPurchase');
    let home1 = document.getElementById('home1');
    let mainMenu = document.getElementById('mainMenu');
    let tdOrder = document.getElementById('tdOrder');
    let showBalance = document.getElementById('showBalance');
    let topUpPage1 = document.getElementById('topUpPage1');
    let topUpPage = document.getElementById('topUpPage');
    let cancel = document.getElementById('cancel');
    let orderHistory = document.getElementById('orderHistory');
    orderHistory.style.display = "none";
    cancel.style.display = "none";
    topUpPage.style.display = "none";
    topUpPage1.style.display = "none";
    showBalance.style.display = "none";
    mainMenu.style.display = "block";
    home1.style.display = "none";
    medicineDetails.style.display = "none";
    purchase.style.display = "block";
    indexBtn = index;
}
function confirmBuy() {
    let countRequired = parseInt(document.getElementById('buyInput').value);
    var flag = true;
    var x = 1;
    MedicineList.forEach(element => {
        if (x == indexBtn) {
            var TotalPrice = countRequired * element.MedicinePrice;
            if ((element.MedicineCount > countRequired) && CurrentLoggedInUser.Balance > TotalPrice) {
                element.MedicineCount -= countRequired;
                OrderList.push(new OrderInfo(element.MedicineId, CurrentLoggedInUser.UserId, element.MedicineName, countRequired, TotalPrice, OrderStatus.ordered));
                flag = false;
            }
        }
        x++;
    });
    if (flag) {
        alert("Kindly recharge or Check count");
    }
    else {
        alert("Order Sucessfully");
    }
}
function cancel() {
    let cancel = document.getElementById('cancel');
    let tdCancel = document.getElementById('tdCancel');
    let medicineDetails = document.getElementById('medicineDetails');
    let purchase = document.getElementById('purchase');
    let tdPurchase = document.getElementById('tdPurchase');
    let home1 = document.getElementById('home1');
    let mainMenu = document.getElementById('mainMenu');
    let tdOrder = document.getElementById('tdOrder');
    let showBalance = document.getElementById('showBalance');
    let topUpPage1 = document.getElementById('topUpPage1');
    let topUpPage = document.getElementById('topUpPage');
    let orderHistory = document.getElementById('orderHistory');
    orderHistory.style.display = "none";
    cancel.style.display = "block";
    tdCancel.innerHTML = "null";
    topUpPage.style.display = "none";
    topUpPage1.style.display = "none";
    showBalance.style.display = "none";
    mainMenu.style.display = "block";
    home1.style.display = "none";
    medicineDetails.style.display = "none";
    purchase.style.display = "none";
    tdCancel.innerHTML = `<tr><th>Medicine ID</th><th>User ID</th><th>Medicine Name</th><th>Medicine Count</th><th>Order Status</th><th>Cancel</th></tr>`;
    var n = 1;
    OrderList.forEach(element => {
        tdCancel.innerHTML += `<tr><td>${element.MedicineId}</td><td>${element.UserId}</td><td>${element.MedicineName}</td><td>${element.MedicineCount}</td><td>${element.OrderStatus}</td><td><button onclick="cancelBtn(${n++})">Cancel</button></td></tr>`;
    });
}
function cancelBtn(index) {
    var flag = false;
    var x = 1;
    OrderList.forEach(element => {
        if (x == index) {
            MedicineList.forEach(medElement => {
                if (medElement.MedicineId == element.MedicineId) {
                    if (element.OrderStatus == OrderStatus.ordered) {
                        medElement.MedicineCount += element.MedicineCount;
                        CurrentLoggedInUser.topUpAmount(element.TotalPrice);
                        element.OrderStatus = OrderStatus.cancelled;
                        flag = true;
                    }
                }
            });
        }
        x++;
    });
    if (flag) {
        alert("Order Cancel Successfully");
    }
    else {
        alert("Order Already Cancelled");
    }
}
