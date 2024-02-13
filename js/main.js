// function signUp(e){
//         event.preventDefault();
//         try {
//           const response =axios.post('https://my-brand-api.onrender.com/api/user/signUp', {
//             flname:flname,
//             Email: Email,
//             password: password,
//           });
//           console.log(response.data);
//         } catch (error) {
//           console.error(error);
//         }
// }
const signUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://my-brand-api.onrender.com/api/user/signUp', {
        flname:flname,
        Email: Email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
function loginfunc(e) {
// event.preventDefault();
//     var flname = document.getElementById('flname').value;
//     var pwd = document.getElementById('pwd').value;
//     var result = document.getElementById('result');

//     var name = localStorage.getItem(flname);
//     var data = JSON.parse(name);
//     if (name == null) {
//         result.innerHTML= "correct your username plz!!!";
//     }
//     else if (flname == data.flname && pwd == data.pwd) {
//         window.location.href = "dashBoard.html";
//     }
//     else {
//         result.innerHTML = "correct your password plz!!!";
//     }
const form = document.getElementById('login-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  try {
    const response = await axios.post('https://my-brand-api.onrender.com/api/user/login', { email, password });
    localStorage.setItem('token', response.data.token);
    alert('Login successful!');
  } catch (error) {
    alert('Invalid email or password');
  }
});
}