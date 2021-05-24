// let emailId = document.getElementById('emailId');
// let phone = document.getElementById('phoneNumber');
// let address = document.getElementById('address');
// let form = document.getElementById('form');
 let lastName = document.getElementById('lastName');
 let firstName = document.getElementById('firstName');
    




function validate(){
   var fName = document.form_data.firstName;
   var lName = document.form_data.lastName;
   var emailId = document.form_data.emailId;
   var phoneNumber = document.form_data.phoneNumber;
   var address = document.form_data.address;

   if(fName.value.length <= 0){
       alert('please enter fastname');
       fName.focus();
       return false;
   }
   if(lName.value.length <= 0){
    alert('please enter lastname');
    lName.focus();
    return false;
}
if(emailId.value.length <= 0){
    alert('please enter emailId');
    emailId.focus();
    return false;
}
if(phoneNumber.value.length <= 0){
    alert('please enter phoneNumber');
    phoneNumber.focus();
    return false;
}
if(address.value.length <= 0){
    alert('please enter address');
    address.focus();
    return false;
}
return false;
   
}

document.getElementById('form').value;
var form = {
    fname: firstName.value,
    lName: lastName.value,
    emailId: emailId.value,
    phoneNumber: phoneNumber.value,
    address: address.value
};
console.log(form[0]);
////validate password
// function ValidateEmail(inputText)
// {
// var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form_data.emailId.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form_data.emailId.focus();
// return false;
// }