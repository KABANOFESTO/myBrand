function signUp() {
    var email = document.getElementById('email').value;
    var flname = document.getElementById('flname').value;
    var pwd = document.getElementById('pwd').value;

    var formData = {
        email: email,
        flname: flname,
        pwd: pwd,
    };
    var json = JSON.stringify(formData);
    localStorage.setItem('user', json);
    console.log('well done');
    return false
}
function loginfunc() {

    var flname = document.getElementById('flname').value;
    var pwd = document.getElementById('pwd').value;
    var result = document.getElementById('result');

    var name = localStorage.getItem(flname);
    var data = JSON.parse(name);
    console.log(data);
    if (name == null) {
        window.location.href = "dashBoard.html";
    }
    else if (flname == data.flname && pwd == data.pwd) {
        window.location.href = "dashBoard.html";
    }
    else {
        result.innerHTML = "wrong password";
    }
    return false
}