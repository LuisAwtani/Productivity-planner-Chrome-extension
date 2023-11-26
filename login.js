function logged_in() {
    window.location.href = 'popup1.html';
}


document.getElementById("begin").addEventListener("click", submitcheck);
//Check if user has permanent name, if so, redirect them to popup1.html
function show() {


    if (localStorage.getItem("permaname") !== null) {
        logged_in();
    }
}


function submitcheck() {
    //Get permanent name by user when they first use the app
    var permanamee = document.getElementById("permaname");
    var permaname = String(permanamee.value)
    //check if name is at least 2 characters

    if (permaname.length < 2) {
        document.getElementById("errormessage").innerHTML = "*Name must be at least 2 letters long";
        return;
    }

    localStorage.setItem("permaname", permaname);
    window.location.href = 'popup1.html';
};


show()