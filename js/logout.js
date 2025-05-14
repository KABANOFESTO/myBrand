const isAdminLogedIn = () => {
  const loginedUser = JSON.parse(localStorage.getItem("loginedUser")) || [];
  if (loginedUser.role != "admin") {
    location.href = '../src/login.html'
  }
}
isAdminLogedIn()
const logout = () => {
  localStorage.removeItem("loginedUser");
  location.href = '../../index.html'
};

document.getElementById("logoutBtn").addEventListener('click', logout)