let namee = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUpBtn = document.getElementById("signUpBtn");
let emailAlert = document.getElementById("emailAlert");
let allinputsalert = document.getElementById("allinputsalert");
let emailExistAlert = document.getElementById("emailExistAlert");
let loginemail = document.getElementById("loginemail");
let loginpassword = document.getElementById("loginpassword");
let loginAlert = document.getElementById("loginAlert");
let loginCorrectionAlert = document.getElementById("loginCorrectionAlert");
let signUpBack = document.getElementById("signUpBack");
let loginBtn = document.getElementById("loginBtn");
let signbuttun = document.getElementById("signbuttun");
let welcomeName = document.getElementById("welcomeName");
let Arr = [];
// if (localStorage.getItem("users") == null) {
//     Arr = [];
// } else {
// Arr = JSON.parse(localStorage.getItem("users"))

// signUpBtn.addEventListener("click", function () {
//     signUp();
// });

// function exist() {
//     let storedUsers = localStorage.getItem("users");
//     if (storedUsers) {
//         Arr = JSON.parse(storedUsers);
//         for (var i = 0; i < Arr.length; i++) {
//             if (Arr[i].email === email.value) {
//                 return true;
//             }
//         }
//     }
//     return false; // Return false if the email doesn't exist or no stored users
// }
// function validation() {
//     let nameRegex = /^[a-zA-Z\s]+$/;
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/; // Stronger password validation

//     let isNameValid = nameRegex.test(namee.value);
//     let isEmailValid = emailRegex.test(email.value);
//     let isPassValid = passRegex.test(password.value);
// }
///////////////////////////////////



// Load existing users from local storage on page load
if (localStorage.getItem("users")) {
        Arr = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
    if (validation()== true) {
        if (!exist(email.value)) {
            let UserInfo = {
                name: namee.value,
                email: email.value,
                password: password.value
            };
            Arr.push(UserInfo);
            localStorage.setItem("users", JSON.stringify(Arr));
            // Clear input fields after successful signup
            namee.value = "";
            email.value = "";
            password.value = "";
            emailExistAlert.classList.add("d-none");
              emailAlert.classList.add("d-none");
            location.href='index.html'
        } else {
            emailExistAlert.classList.remove("d-none");
            emailExistAlert.classList.add("d-flex");
            // Hide other alerts if email already exists
            emailAlert.classList.remove("d-flex");
            emailAlert.classList.add("d-none");
            allinputsalert.classList.remove("d-flex");
            allinputsalert.classList.add("d-none");
        }
    } else {
        emailAlert.classList.remove("d-none");
        emailAlert.classList.add("d-flex");
        allinputsalert.classList.remove("d-flex");
        allinputsalert.classList.add("d-none");
        emailExistAlert.classList.remove("d-flex");
        emailExistAlert.classList.add("d-none");
    }
}

signUpBtn.addEventListener("click", function () {
    signUp();
});

function validation() {
    let nameRegex = /^[a-zA-Z\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passRegex = /[0-9]+([a-z]||[A-Z]){3,}\w/;

    if (nameRegex.test(namee.value) == true) {
        namee.classList.remove("is-invalid");
        namee.classList.add("is-valid");
    } else {
        namee.classList.remove("is-valid");
        namee.classList.add("is-invalid");
        allinputsalert.classList.remove("d-flex");
        allinputsalert.classList.add("d-none");
        return false;  // Added to exit function if name is invalid
    }

    if (emailRegex.test(email.value) == true) {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    } else {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        allinputsalert.classList.remove("d-flex");
        allinputsalert.classList.add("d-none");
        return false;  // Added to exit function if email is invalid
    }

    if (passRegex.test(password.value) == true) {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
    } else {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        allinputsalert.classList.remove("d-flex");
        allinputsalert.classList.add("d-none");
        return false;  // Added to exit function if password is invalid
    }

    if (email.value == "" || namee.value == "" || password.value == "") {
        emailAlert.classList.remove("d-flex");
        emailAlert.classList.add("d-none");
        allinputsalert.classList.remove("d-none");
        allinputsalert.classList.add("d-flex");
        namee.classList.remove("is-invalid");
        password.classList.remove("is-invalid");
        email.classList.remove("is-invalid");
        return false;  // Added to exit function if any field is empty
    }

    return true;  // Return true only if all validations pass
}


function exist(email) {
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i].email === email) {
            return true;
        }
    }
    return false;
}
    let storedData = localStorage.getItem("users");

function login() {
    if (loginemail.value == "" || loginpassword.value == "") {
        loginCorrectionAlert.classList.remove("d-flex");
        loginCorrectionAlert.classList.add("d-none");
        loginAlert.classList.remove("d-none");
        loginAlert.classList.add("d-flex");
        signUpBack.classList.remove("d-flex");
        signUpBack.classList.add("d-none");
    } else {
        for (i = 0; i < Arr.length; i++) {
            if ( Arr[i].password !== loginpassword.value && Arr[i].email == loginemail.value) {
                loginAlert.classList.remove("d-flex");
                loginAlert.classList.add("d-none");
                signUpBack.classList.remove("d-flex");
                signUpBack.classList.add("d-none");
                loginCorrectionAlert.classList.remove("d-none");
                loginCorrectionAlert.classList.add("d-flex");
            }
           else if (Arr[i].email === loginemail.value && Arr[i].password === loginpassword.value) {
                // console.log("hello")
                loginAlert.classList.remove("d-flex");
                loginAlert.classList.add("d-none");
                signUpBack.classList.remove("d-flex");
                signUpBack.classList.add("d-none");
                loginCorrectionAlert.classList.remove("d-flex");
                loginCorrectionAlert.classList.add("d-none");
                localStorage.setItem("userNameInLocalStorage", Arr[i].name);
                // welcome()
                 location.href='home.html'

            } else if (Arr[i].email !== loginemail.value) {
                loginCorrectionAlert.classList.remove("d-flex");
                loginCorrectionAlert.classList.add("d-none");
                loginAlert.classList.remove("d-flex");
                signUpBack.classList.remove("d-flex");
                signUpBack.classList.remove("d-none");
                signUpBack.classList.add("d-flex");
            }
        }
    
    }
}
function signupPage() {
    location.href ='singUp.html'
}


function logOut() {
    localStorage.removeItem("userNameInLocalStorage");
    location.href = 'index.html';

}
function welcome() {
    welcomedUser = localStorage.getItem("userNameInLocalStorage");
    welcomeName.innerHTML = 'welcome' + " " + welcomedUser;
}
// signbuttun.addEventListener("click", function () {
//     Location.href = "../singUp.html";
// })