
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function signup(e) {
    event.preventDefault();
    // console.log('ground');
    var email = document.getElementById('my-email').value;
    var password = document.getElementById('my-password').value;

    var user = {
        email:email,
        password:password,

    };
    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    window.location = '../Pages/forms.html';
}


function signin(e) {
    event.preventDefault();
    //  console.log('Monique');
    var email = document.getElementById('email').value;
    var password = document.getElementById('myInput').value;
    var result = document.getElementById('result');
    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    // console.log('data');

    if(user  == null){
        result.textContent='Wrong email';
    } else if(email == data.email && password == data.password) {
       window.location = '../Pages/weight.html';
    } else {
        result.innerHTML = 'wrong password';
    }
}