const form = document.querySelector("#Form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    isValid = true;

    const nameVal = username.value.trim();
    if(nameVal === ''){
        showError(username, 'Name is required!');
        isValid = false;
    }else if(!/^[a-zA-Z .'-]+$/.test(nameVal)){
        showError(username, 'Only letters and space allowed in name!');
        isValid = false;
    }else{
        showSuccess(username);
    }

    const emailVal = email.value.trim(email);
    if(emailVal === ''){
        showError(email, "Email is required!");
        isValid = false;
    }else if(! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailVal)){
        showError(email, 'Invalid email enter a valid email');
        isValid = false;
    }else{
        showSuccess(email);
    }


    const passwordVal = password.value.trim();
    if(passwordVal === ''){
        showError(password,'Password is required!');
        isValid = false;
    }else if(passwordVal.length < 8){
        showError(password, 'Password must be contain 8 charters!');
        isValid = false;
    }else if(!/[a-z]/.test(passwordVal)){
        showError(password, 'Password must be one lowercase!');
        isValid = false;
    }else if(!/[A-Z]/.test(passwordVal)){
        showError(password, 'Password must be one uppercase!');
        isValid = false;
    }else if(!/[0-9]/.test(passwordVal)){
        showError(password, 'Password must be one number!');
        isValid = false;
    }else if(!/[\W_]/.test(passwordVal)){
        showError(password, 'Password must be one special charters!');
        isValid = false;
    }else{
        showSuccess(password);
    }

    const cpasswordVal = cpassword.value.trim();
    if(cpasswordVal === ''){
        showError(cpassword, 'Confirm password is required!');
        isValid = false;
    }else if(passwordVal !== cpasswordVal){
        showError(cpassword, "Password doesn't match");
        isValid = false;
    }else{
        showSuccess(cpassword);
    }

    if(isValid){
    alert('Form submitted successfully!.');
    form.reset();
}
});



function showError(input, message){
    const FormControl = input.parentElement;
    FormControl.className = "form-control error";
    const small = FormControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const FormControl = input.parentElement;
    FormControl.className = "form-control success";
    const small = FormControl.querySelector('small');
    small.innerText = "";
}
