function validate(event){

    event.preventDefault();
    const data = new FormData(event.target);

   const value = Object.fromEntries(data.entries());

  console.log({ value });

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

const form = document.querySelector('form');
  form.addEventListener('submit', validate);
