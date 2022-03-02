//---------------New user registration--------------------//
export function createUser(event) {
    event.preventDefault();

    //-------get userData collection from localStorage or set it---------//
    let userDetails = JSON.parse(localStorage.getItem("userData")) || [];

    //------get input values from regForm-----------------//
    let username = RegForm.user1.value;
    let email = RegForm.email1.value;
    let password = RegForm.pass1.value;

    //------ grab and prepare users data......//
    let user = {
        username,
        email,
        password
    }

    //----------check for empty values-------//
    if (username.length < 1 || email.length < 1 || password.length < 1) {
        window.alert("Input invalid");
        RegForm.user1.value = "";
        RegForm.email1.value = "";
        RegForm.pass1.value = "";
        return;
    }

    //------- check if user already exist---------//       
    userDetails.forEach(function check(ele) {
        if (ele.email === user.email) {
            window.alert("This Email is already resgistered with us!");
            RegForm.user1.value = "";
            RegForm.email1.value = "";
            RegForm.pass1.value = "";
            return;
        }
    });

    if (user.password.length < 8) {
        window.alert("Password should be more than 8 charecter.");
        RegForm.user1.value = "";
        RegForm.email1.value = "";
        RegForm.pass1.value = "";
        return;
    }

    //------if above case passed -- push new user to the userData array in localStorage----//

    userDetails.push(user)   // added a new user

    localStorage.setItem("userData", JSON.stringify(userDetails));

    window.alert(`Welcome to Red-Store !
    Please login with your credential.`)
    login()

    console.log(user)

    //------setting all value to empty again in the form---------//
    RegForm.user1.value = "";
    RegForm.email1.value = "";
    RegForm.pass1.value = "";

}


