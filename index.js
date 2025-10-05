let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");


//STORING THE VALUES INTO A VARIABLE
let firstName, lastName, email, password;
let field; // whee we store

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