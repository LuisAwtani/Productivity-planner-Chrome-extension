const quotes = ["We cannot solve problems with the kind of thinking we employed when we came up with them.", "Learn as if you will live forever, live like you will die tomorrow.", "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.", "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.", "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.", "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.", "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.", "When a woman becomes her own best friend life is easier.", "One of the differences between some successful and unsuccessful people is that one group is full of doers, while the other is full of wishers.", "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.", "If the decisions you make about where you invest your blood, sweat, and tears are not consistent with the person you aspire to be, you’ll never become that person.", "We must reach out our hand in friendship and dignity both to those who would befriend us and those who would be our enemy.", "The two most important days in your life are the day you’re born and the day you find out why.", "Relentlessly prune bullshit, don't wait to do things that matter, and savor the time you have. That's what you do when life is short.", "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.", "They're called 'Lessons' for a reason; they lessen from day to day.", "Do not stop thinking of life as an adventure. You have no security unless you can live bravely, excitingly, imaginatively; unless you can choose a challenge instead of competence."]


let n = 3;
let text = "";

let txt = document.getElementById("edmo").innerHTML;
document.getElementById("addappointment").addEventListener("click", i);
document.getElementById("prepared").addEventListener("click", formsubmission);



function resetapp() {
    lol = localStorage.getItem("permaname");
    localStorage.clear();
    localStorage.setItem("permaname", lol);
};

function i() {
    text += txt;
    document.getElementById("demo").innerHTML = text;
    n += 1
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function setquote () {
    //select random number
    var iot = Math.round(17 * Math.random())
    dailyquote = quotes[iot]
    lola = localStorage.setItem("dailyquote", dailyquote)
}

function show() {
    
    //check if user already set daily tings
    let e1 = document.getElementsByClassName("appointment");

    
    if (e1[0].value !== "") {
        window.location.href = 'popup.html'
        return;
    }
    setquote();

    //say hello, name
    llamo = localStorage.getItem("permaname")
    llamoo = capitalizeFirstLetter(llamo)
    document.getElementById("hello_world").innerHTML = "Hello," + "&nbsp" + llamoo;
    //Check if appointments aready set, change to be a cookie
    if (localStorage.getItem(0 + "movie") !== null) {

        //window.location.href = 'popup.html';
        //return
    }
    setquote()
    document.getElementById("motiquote").innerHTML = localStorage.getItem("dailyquote");
    for (let i = 0; i < n - 1; i++) {
        text += txt;
    }
    document.getElementById("demo").innerHTML = text;
};


function formsubmission() {
    //store input values from first page
    let v1 = document.getElementsByClassName("appointment");
    let v2 = document.getElementsByClassName("time");

    //TODO check for valid input!
    if (v1[0].value == "") {
        document.getElementById("errorm").innerHTML = "Please enter a priority";
        return;
    }
  
        
    //Redirect to second page
    window.location.href = 'popup.html';
    //reads appointment values for all text fields
    //TODO SET REMINDERS
    localStorage.setItem(0 + "movie" , v1[0].value)
    var t = 0

    for (let i = 0; i < n; i++) {
        var k = i + 1;
        if (v1[k].value !== "") {
            localStorage.setItem(t + 1 + "movie" , v1[k].value)
            t += 1;
            
            if (v2[i].value.length == 5) {
                //SET REMINDERS TO CORRESPONDING TIMES 
                localStorage.setItem(t - 1 + "reminder_time", v2[i].value)
                }
        }
    }
localStorage.setItem("counter", t)
}

show();
