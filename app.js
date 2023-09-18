// Считываем поле ввода
let phoneInput = document.querySelectorAll(".phone");
// Считываем кнопку
let btn = document.querySelector(".form-btn");

/*// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});*/

let phoneMask;

for (let phInp of phoneInput) {
    phoneMask = new IMask(phInp, {
    mask: "+{7}(000)000-00-00",
  });
}

/*
// Обработчик события для инпута
phoneInput.addEventListener("input", phoneInputHandler);
// Обработчик события для кнопки
btn.addEventListener("click", btnHandler);

// Если ввели правильно - кнопка активна
function phoneInputHandler() {
  if (phoneMask.masked.isComplete) {
    btn.classList.add("form-btn_active");
  } else {
    btn.classList.remove("form-btn_active");
  }
}

// Отправляем номер телефона
async function btnHandler(e) {
  e.preventDefault();
  return await fetch("send_msg.php", {
    method: "POST",
    body: phoneMask.unmaskedValue,
  });
}*/
