const dropDownBtn = document.querySelector('.drop-down-nav');

const navList = document.querySelector(".nav-list");
dropDownBtn.addEventListener('click', () => {
    setTimeout(() =>  { 
        navList.classList.toggle('nav-list-show') + dropDownBtn.classList.toggle('drop-down-rotate')   
        ;},200)   
    });    
    
    
    
    
       
    
    
    const formJs = document.querySelector('#formJs');
    const firstNameJs = document.querySelector('#first-name-js');
    const lastNameJs = document.querySelector('#last-name-js');
    const emailJs = document.querySelector('#email-js');
    const passwordJs = document.querySelector('#password-js');
    const textAreaJs = document.querySelector('#text-area-js');
    const submitJs = document.querySelector('#submit-js');
  
    
    formJs.addEventListener('submit', (e) => {
        
        e.preventDefault()
        
       let firstName = firstNameJs.value;
       let lastName = lastNameJs.value;
       let email = emailJs.value;
       let password = passwordJs.value;
        
        if (firstName ==="") {
            alert("Please enter your first name");
            return;
        }
        
        if (lastName ==="") {
            alert ("please enter your last name");
            return;
        }
        
        if (email === "") {
            alert("Please enter your email");
        }
        
        if(password === "") {
            alert("Please enter your password");
            return;
        }
        
        //Alert form submitted
        
        
    })
    

    firstNameJs.addEventListener('keyup', () => {
        const firstNameError = document.querySelector('#first-name-error');
        if (!firstNameJs.value.match(/^[a-zA-Z]{2,}/)) {
            firstNameError.innerHTML = "Name must be at least 2 characters";
            firstNameJs.style.borderColor =  "red";
            firstNameJs.style.animation = "shake .13s 3";
            return false;

        }
        firstNameError.innerHTML = "";
        firstNameJs.style.borderColor =  "green";

        return true;
        
    })

    
    lastNameJs.addEventListener('keyup', () => {
        const lastNameError = document.querySelector('#last-name-error');
        if (!lastNameJs.value.match(/^[a-zA-Z]{2,}/)) {
            lastNameError.innerHTML = "Name must be at least 2 characters";
            lastNameJs.style.borderColor =  "red";
            lastNameJs.style.animation = "shake .13s 3";
            return false;

        }

        lastNameError.innerHTML = "";
        lastNameJs.style.borderColor =  "green";
        return true;
        
    })
    
    textAreaJs.addEventListener('keyup', () => {
        const textAreaError = document.querySelector('#textArea-error');
        if  (!textAreaJs.value.match(/^[a-zA-Z]{25,}/)){
            textAreaError.innerHTML = "Message must be at least 25 characters.";
            textAreaJs.style.borderColor =  "red";
            return false;
        }
        
        textAreaError.innerHTML = "";
        textAreaJs.style.borderColor =  "green";
        return true;
        
    })

    emailJs.addEventListener('keyup', () => {
        const emailError = document.querySelector('#email-error');
        if (!emailJs.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) ){
            emailError.innerHTML = "Please enter a valid email.";
            emailJs.style.borderColor =  "red";
            emailJs.style.animation = "shake .13s 3";
            return false;

        }

        emailError.innerHTML = "";
        emailJs.style.borderColor =  "green";
        return true;
        
    })

    passwordJs.addEventListener('keyup', () => {
        const passwordError = document.querySelector('#password-error');
        if (!passwordJs.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
            passwordError.innerHTML = "Please enter a valid password.";
            passwordJs.style.borderColor =  "red";
            passwordJs.style.animation = "shake .13s 3";
            return false;
        }
        
        passwordError.innerHTML = "";
        passwordJs.style.borderColor =  "green";
        return true;
        
    })

    submitJs.addEventListener('submit', () => {

        if (!passwordJs.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
            console.log('success')
        }
    })





    


    
    