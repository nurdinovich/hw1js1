const input = prompt("Пожалуйста, введите значение:");

if (!isNaN(input)) {
  alert("Вы ввели число");
} else {
  alert("Вы ввели текст");
}