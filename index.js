let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");

//
let errorMessages = document.querySelectorAll(".error-message");
let emptyfieldMessages = document.querySelectorAll(".empty-field");

//STORING THE VALUES INTO A VARIABLE
let firstName, lastName, email, password;
let field; // whee we store THE TARGET(input key)

//Regular express


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
    console.log(firstName, lastName, password,email);
})