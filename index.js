let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");

//
let errorMessages = document.querySelectorAll(".error-message");
let emptyfieldMessages = document.querySelectorAll(".empty-field");

//STORING THE VALUES INTO A VARIABLE
let firstName, lastName, email, password;
let field; // whee we store THE TARGET(input key)

//Regular expression For validation
let nameRegex  = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//
for (let errorMessage of errorMessages){
  errorMessage.classList.add("d-none");
}

for (let emptyfieldMessage of emptyfieldMessages){
  emptyfieldMessage.classList.add("d-none");
}


formData.addEventListener("keyup", (event)=> {
    event.preventDefault();
    field = event.target.dataset.key;
    switch(field) {
        case "firstName" :
            firstName = event.target.value;
            break;
        case "lastName":
            lastName = event.target.value;
            break;
        case "email":
            email = event.target.value;
            break;
        case "password" :
            password = event.target.value;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
})

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, password);
    if (firstName) {
        if (!nameRegex.test(firstName)) {
            console.log("Name must contin only alphabets")
        } else {
            console.log("good to go")
        }
    } else {
        console.log("must fill this field")
    }
    if (lastName) {
        if (!nameRegex.test(lastName)) {
            console.log("name must contain alphabet")
        } else {
            console.log("good to gio")
        }
    } else {
        console.log("must fill this field")
    }
    if (email) {
        if(!emailRegex.test(email)) {
            console.log("")
        } else {
            console.log("");
        }
    } else {
        console.log("");
    }
    if (password) {
        if (!passwordRegex.test(password)) {
            console.log("password valid")
        } else {
            console.log("")
        }
    } else {
        console.log("")
    }
})