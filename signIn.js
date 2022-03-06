//---------------New user registration--------------------//

export function signIn(event) {
    event.preventDefault();

    //-------get userData collection from localStorage or set it---------//
    let userDetails = JSON.parse(localStorage.getItem("userData"));

    //------get input values from loginForm-----------------//
    let username = LoginForm.email2.value;
    let password = LoginForm.pass2.value;

    //----------check for empty values-------//
    if (username.length < 1 || password.length < 1) {
        window.alert("Input invalid");
        return;
    }

    //------- check if user already exist---------//     

    let flag = true;
    userDetails.forEach(function check(ele) {
        if (ele.email === username) {
            if (ele.password === password) {
                 flag = false;               
                 localStorage.setItem("loginData",JSON.stringify([ele.username]))
             
                window.alert("logged in successfully")
                window.location.href = "./index.html";              
                return;
            }
            window.alert("Invalid Input")
        }
    });
   //----if user doesn't exist in our database------//
    if (flag) {
        window.alert("Register yourself");
        registration();
    }

    console.log(username, password)

    //------setting all value to empty again in the form---------//
    LoginForm.email2.value = "";    
    LoginForm.pass2.value = "";

}


