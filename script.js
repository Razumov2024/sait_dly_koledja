document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu');
    const spisok = document.querySelector('.spisok');
    
    menuBtn.addEventListener('click', function() {
        spisok.classList.toggle('active');
        
        document.body.classList.toggle('no-scroll');
    });
    
    document.querySelectorAll('.spisok li').forEach(item => {
        item.addEventListener('click', function() {
            spisok.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// форма регистр

// Get the modal

// форма регистр
// форма регистр
var modal = document.getElementById('id01');
var form = document.querySelector('.modal-content');
var usernameInput = document.querySelector('input[name="uname"]');
var passwordInput = document.querySelector('input[name="psw"]');
var rememberCheckbox = document.querySelector('input[name="remember"]');
var cancelBtn = document.querySelector('.cancelbtn');

// Валидация имени пользователя (только буквы)
usernameInput.addEventListener('input', function(e) {
  this.value = this.value.replace(/[^a-zA-Zа-яА-Я]/g, '');
});

// Функция очистки полей
function clearForm() {
  usernameInput.value = '';
  passwordInput.value = '';
  rememberCheckbox.checked = true;
}

// Обработчик кнопки Cancel
cancelBtn.addEventListener('click', function() {
  clearForm();
  modal.style.display = "none";
});

// Функция валидации формы
function validateForm(e) {
  e.preventDefault();
  
  var username = usernameInput.value.trim();
  var password = passwordInput.value.trim();
  
  // Валидация имени пользователя
  if (username.length < 4) {
    alert("Имя пользователя должно содержать минимум 4 буквы");
    usernameInput.focus();
    return;
  }
  
  // Валидация пароля
  if (password.length < 6) {
    alert("Пароль должен содержать минимум 6 символов");
    passwordInput.focus();
    return;
  }
  
  // Если валидация прошла успешно
  alert("Привет, " + username + "!");
  clearForm();
  modal.style.display = "none";
}

// Назначаем обработчик формы
form.addEventListener('submit', validateForm);

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    clearForm();
    modal.style.display = "none";
  }
});