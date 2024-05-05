let autoIncreamentCardNumber = 1000;
let autoIncreamentTravelId = 2000;
let autoIncreamentTicketId = 3000;

let newUserNameStatus = false;
let newUserPhoneStatus = false;

let currentLoggedInUser : UserDetails;

class PersonalDetails{
    UserName : string
    PhoneNumber :  string

    constructor(paramUserName : string, paramPhoneNumber:string){
        this.UserName = paramUserName;
        this.PhoneNumber = paramPhoneNumber;

    }
}

interface Ibalance{
    Balance : number
    WalletRecharge(rechargeAmount : number):number;
    DeductBalance(deductBalance : number) :void;
    
}

class UserDetails extends PersonalDetails implements Ibalance{

    CardNumber :  string
    Balance : number

    constructor (UserName:string,PhoneNumber:string)
    {
        super(UserName,PhoneNumber)
        autoIncreamentCardNumber++;
        this.CardNumber = "CMRL"+autoIncreamentCardNumber.toString();
        this.Balance = 0;
    }

    WalletRecharge(rechargeAmount : number):number{
        this.Balance+=rechargeAmount;
        return this.Balance;

    }
    showBalance():number{
        return this.Balance;
    }
    DeductBalance(deductBalance: number):void{
        this.Balance-=deductBalance;
        // return this.Balance;
    }

}

class TravelDetails{
    TravelId : string
    CardNumber : string
	FromLocation : string
	ToLocation : string
	Date : Date
	TravelCost : number

    constructor(paramCardNumber : string, paramFromLocation  : string,paramToLocation : string,paramDate :  Date,paramTravelCost : number)
    {
        autoIncreamentTravelId++;
        this.TravelId = "TID" +autoIncreamentTravelId.toString();
        this.CardNumber = paramCardNumber;
        this.FromLocation = paramFromLocation;
        this.ToLocation = paramToLocation;
        this.Date =  paramDate;
        this.TravelCost = paramTravelCost;
    }

}

class TicketFairDetails{
    TicketId : string
    FromLocation : string
    ToLocation : string
    TicketPrice : number

    constructor(paramFromLocation : string, paramToLocation : string,paramTicketPrice : number)
    {
        autoIncreamentTicketId++;
        this.TicketId = "MR"+autoIncreamentTicketId.toString();
        this.FromLocation = paramFromLocation;
        this.ToLocation  = paramToLocation;
        this.TicketPrice = paramTicketPrice
    }
}

let UserDetailsList : Array<UserDetails> = new Array<UserDetails>();

UserDetailsList.push(new UserDetails("Ravi","9848812345"));
UserDetailsList.push(new UserDetails("Baskaran","9948854321"));

let TravelDetailsList : Array<TravelDetails> = new Array<TravelDetails>();

TravelDetailsList.push(new TravelDetails("CMRL1001","Airport","Egmore",new Date(2023,10,10),55));
TravelDetailsList.push(new TravelDetails("CMRL1001","Egmore","Koyambedu",new Date(2023,10,10),32));
TravelDetailsList.push(new TravelDetails("CMRL1002","Alandur","Koyambedu",new Date(2023,11,10),25));
TravelDetailsList.push(new TravelDetails("CMRL1002","Egmore","Thirumangalm",new Date(2023,11,10),25));

let TicketFairDetailsList : Array<TicketFairDetails> =new Array<TicketFairDetails>();

TicketFairDetailsList.push(new TicketFairDetails("Airport","Egmore",55));
TicketFairDetailsList.push(new TicketFairDetails("Airport","Koyambedu",25));
TicketFairDetailsList.push(new TicketFairDetails("Alandur","Koyambedu",25));
TicketFairDetailsList.push(new TicketFairDetails("Koyambedu","Egmore",32));
TicketFairDetailsList.push(new TicketFairDetails("Vadapalani","Egmore",45));
TicketFairDetailsList.push(new TicketFairDetails("Arumbakam","Egmore",25));
TicketFairDetailsList.push(new TicketFairDetails("Vadapalani","Koyambedu",25));
TicketFairDetailsList.push(new TicketFairDetails("Arumbakam","Koyambedu",16));

function newUserPage()
{
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    let homePage = document.getElementById('homePage') as HTMLDivElement;
    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;

    homePage.style.display = "block";
    newUserPage.style.display = "block";
    existingUserPage.style.display="none";
}


function checkNewUserName(paramNewUserName: string)
{
    let newUserName = (document.getElementById('newUserName') as HTMLInputElement).value;
    let newUserNameMessage= document.getElementById('newUserNameMessage') as HTMLLabelElement;
    let newUserNameRegex= /^[a-zA-z]{3,20}$/;

    if(newUserNameRegex.test(newUserName)){
        newUserNameStatus = true;
        newUserNameMessage.style.visibility = "hidden";
    }
    else{
        newUserNameStatus = false;
        newUserNameMessage.innerHTML = "Please enter valid Username"
        newUserNameMessage.style.visibility="visible";
        newUserNameMessage.style.color="tomato";
    }
}

function checkNewUserPhone(paramNewUserPhone:string)
{
    let newUserPhone = (document.getElementById('newUserPhone') as HTMLInputElement).value;
    let newUserPhoneMessage =document.getElementById('newUserPhoneMessage') as HTMLLabelElement;
    let newUserPhoneRegex = /^([6-9])(\d{9})$/;

    if(newUserPhoneRegex.test(newUserPhone)){
        newUserPhoneStatus = true;
        newUserPhoneMessage.style.visibility="hidden";
    }
    else{
        newUserPhoneStatus = false;
        newUserPhoneMessage.innerHTML = "Please enter valid Phone number";
        newUserPhoneMessage.style.visibility="visible";
        newUserPhoneMessage.style.color="tomato";
    }

}

function signUp()
{
   if(newUserNameStatus==true && newUserPhoneStatus==true)
    {
        let newUserName = (document.getElementById('newUserName') as HTMLInputElement).value;
        let newUserPhone = (document.getElementById('newUserPhone') as HTMLInputElement).value;
        let newUserName1 = (document.getElementById('newUserName') as HTMLInputElement);
        let newUserPhone1 = (document.getElementById('newUserPhone') as HTMLInputElement);
        let newUser = new UserDetails(newUserName,newUserPhone);
        UserDetailsList.push(newUser);

        alert(`Welcome ${newUser.UserName}. Your Card Number is ${newUser.CardNumber} `);
        newUserName1.value="";
        newUserPhone1.value="";
        displayHomePage();

    }


}

function displayHomePage()
{
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    let homePage = document.getElementById('homePage') as HTMLDivElement;
    
    newUserPage.style.display="none";
    homePage.style.display="block";
}

function existingUserPage()
{
    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    let homePage =  document.getElementById('homePage') as HTMLDivElement;

    homePage.style.display="block";
    existingUserPage.style.display ="block";
}

function signIn()
{
    let cardNumberChecker : boolean = false;
    let existingCardNumber = (document.getElementById('existingCardNumber') as HTMLInputElement).value;
    let existingCardNumberRegex = /CMRL1\d{3}/

    if(existingCardNumberRegex.test(existingCardNumber)){
        for(let i=0;i<UserDetailsList.length;i++){
            if(UserDetailsList[i].CardNumber==existingCardNumber){
                currentLoggedInUser=UserDetailsList[i];
                mainMenu();
                return;
            }
            else{
                cardNumberChecker = true;
            }
        }
        if(cardNumberChecker){
            alert('Enter valid Card Number');
        }
    }
    else{
        alert('Enter valid Card Number');
    }
    
    
       
}

function mainMenu()
{
    let mainMenu = document.getElementById('mainMenu') as HTMLDivElement;
    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    let homePage = document.getElementById('homePage') as HTMLDivElement;
    

    mainMenu.style.display="block";
    existingUserPage.style.visibility="hidden";
    homePage.style.visibility="hidden";
}

function balanceCheck(){
    let mainMenu = document.getElementById('mainMenu') as HTMLDivElement;
    let balanceCheck = document.getElementById('balanceCheck') as HTMLDivElement;
    let viewBalance = document.getElementById('viewBalance') as HTMLDivElement;
    let recharge = document.getElementById('recharge') as HTMLDivElement;
    let viewTravelHistory = document.getElementById('viewTravelHistory') as HTMLDivElement;
    let travel = document.getElementById('travel') as HTMLDivElement;

    mainMenu.style.display = "block";
    balanceCheck.style.display = "block";
    recharge.style.display="none";
    viewTravelHistory.style.display="none";
    travel.style.display ="none";

    let currentBalance  = currentLoggedInUser.Balance;   
    viewBalance.innerHTML = 'Your Current Balance : '+ currentBalance;
    
}

function recharge(){
    let mainMenu = document.getElementById('mainMenu') as HTMLDivElement;
    let balanceCheck = document.getElementById('balanceCheck') as HTMLDivElement;
    let recharge = document.getElementById('recharge') as HTMLDivElement;
    let viewTravelHistory = document.getElementById('viewTravelHistory') as HTMLDivElement;
    let travel = document.getElementById('travel') as HTMLDivElement;
 
    recharge.style.display="block";
    mainMenu.style.display = "block";
    balanceCheck.style.display="none"; 
    viewTravelHistory.style.display="none";
    travel.style.display ="none";
    
}

function rechargeBtn(){
    let rechargeAmount = (document.getElementById('rechargeAmount') as HTMLInputElement).value;
    let inputArea = document.getElementById('rechargeAmount') as HTMLInputElement;
    
    currentLoggedInUser.WalletRecharge(parseInt(rechargeAmount));

    alert('Recharge Successfully');
    inputArea.value= "";
    
}

function viewTravelHistory(){
    let mainMenu = document.getElementById('mainMenu') as HTMLDivElement;
    let balanceCheck = document.getElementById('balanceCheck') as HTMLDivElement;
    let recharge = document.getElementById('recharge') as HTMLDivElement;
    let viewTravelHistory = document.getElementById('viewTravelHistory') as HTMLDivElement;
    let travelDetailsTable = document.getElementById('travelDetailsTable') as HTMLDivElement;
    let travel = document.getElementById('travel') as HTMLDivElement;

    recharge.style.display="none";
    mainMenu.style.display = "block";
    balanceCheck.style.display="none"; 
    viewTravelHistory.style.display="block";
    travel.style.display ="none";

    let flag: boolean=false;
    
    TravelDetailsList.forEach(element =>
        {
            if(element.CardNumber==currentLoggedInUser.CardNumber){
                travelDetailsTable.innerHTML = `<tr><th>Travel ID</th><th>CardNumber</th><th>FromLocation</th><th>ToLocation</th><th>Date</th><th>TravelCost</th></tr>`;
                flag = true;
        }
    }
    )
    TravelDetailsList.forEach(element =>
        {
            if(element.CardNumber==currentLoggedInUser.CardNumber){
                travelDetailsTable.innerHTML+=`<tr><td>${element.TravelId}</td><td>${element.CardNumber}</td><td>${element.FromLocation}</td><td>${element.ToLocation}</td><td>${element.Date.toLocaleDateString()}</td><td>${element.TravelCost}</td></tr>`;
        }
    }
    )
    if(!flag){
        alert('Not yet travel');
        viewTravelHistory.style.display="none";
    }
    
}

function travel()
{
    let mainMenu = document.getElementById('mainMenu') as HTMLDivElement;
    let balanceCheck = document.getElementById('balanceCheck') as HTMLDivElement;
    let recharge = document.getElementById('recharge') as HTMLDivElement;
    let viewTravelHistory = document.getElementById('viewTravelHistory') as HTMLDivElement;
    let travel = document.getElementById('travel') as HTMLDivElement;
    let ticketFairTable = document.getElementById('ticketFairTable') as HTMLDivElement;
   
    recharge.style.display="none";
    mainMenu.style.display = "block";
    balanceCheck.style.display="none"; 
    viewTravelHistory.style.display="none";
    travel.style.display ="block";

    ticketFairTable.innerHTML=`<tr><th>TicketID</th><th>FromLocation</th><th>ToLocation</th><th>Fair</th></tr>`;

    TicketFairDetailsList.forEach(element =>
        {
            ticketFairTable.innerHTML+=`<tr><td>${element.TicketId}</td><td>${element.FromLocation}</td><td>${element.ToLocation}</td><td>${element.TicketPrice}</td></tr>`
        }
    )

}

function ticketIdToBook()
{
    let mainMenu = document.getElementById('mainMenu') as HTMLDivElement;
    let ticketIdInput = (document.getElementById('ticketIdInput') as HTMLInputElement).value;
    let inputTicketId = document.getElementById('ticketIdInput') as HTMLInputElement
    let ticketIdInputRegex = /MR300[1-8]/;

    let lowBalance: Boolean=false;

    if(ticketIdInputRegex.test(ticketIdInput)){
        TicketFairDetailsList.forEach(element =>
            {
                if(element.TicketId == ticketIdInput){
                    if(element.TicketPrice < currentLoggedInUser.Balance){
                        currentLoggedInUser.DeductBalance(element.TicketPrice)
                        TravelDetailsList.push(new TravelDetails(currentLoggedInUser.CardNumber,element.FromLocation,element.ToLocation,new Date(),element.TicketPrice));
                        alert('Happy Journey!') 
                        inputTicketId.value="";
                    }
                    else{
                        lowBalance = true;

                    }
                }
            }
        )
    }
    else{
        alert('Invalid Ticket ID');
    }
    if(lowBalance){
        alert("Kindly recharge to book your ticket");
        
    }

}

function exit()
{
    let exit = document.getElementById('exit') as HTMLDivElement;
    let mainMenu = document.getElementById('mainMenu') as HTMLDivElement;
    let balanceCheck = document.getElementById('balanceCheck') as HTMLDivElement;
    let recharge = document.getElementById('recharge') as HTMLDivElement;
    let viewTravelHistory = document.getElementById('viewTravelHistory') as HTMLDivElement;
    let travel = document.getElementById('travel') as HTMLDivElement;
    

    recharge.style.display="none";
    mainMenu.style.display = "none";
    balanceCheck.style.display="none"; 
    viewTravelHistory.style.display="none";
    travel.style.display ="none";

    let homePage = document.getElementById('homePage') as HTMLDivElement;
    homePage.style.display = "block";

}

