const currentYear = new Date().getFullYear();
const birthYear = parseInt(prompt("Пожалуйста, введите год своего рождения:"));

if (isNaN(birthYear) || birthYear > currentYear) {
  alert("Вы еще не родились!");
} else {
  const age = currentYear - birthYear;

  if (age < 0) {
    alert("Вы еще не родились!");
  } else if (age < 30) {
    alert("Вы младше 30 лет, вы молодой человек.");
  } else if (age < 60) {
    alert("Вы старше 30 лет, но младше 60 лет, вы находитесь в кризисе среднего возраста.");
  } else {
    alert("Вы старше 60 лет, вам советуется посетить врача.");
  }
}