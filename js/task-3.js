const ADMIN_PASSWORD = "1234";
let message;

const password = prompt("Password");

if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
if (password === null) {
  message = "Отменено пользователем!";
}

alert(message);
