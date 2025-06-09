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


// слайдер 2

$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('.jq-slide');
    const dots = $('.jq-dot');
    let slideInterval;

    function showSlide(n) {
        slides.removeClass('jq-active');
        dots.removeClass('jq-active');
        
        currentSlide = (n + slides.length) % slides.length; 
        
        slides.eq(currentSlide).addClass('jq-active');
        dots.eq(currentSlide).addClass('jq-active');
    }

    function startSlider() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3000);
    }

    dots.click(function() {
        clearInterval(slideInterval);
        showSlide($(this).index());
        startSlider();
    });

    showSlide(0);
    startSlider();
});



// форма регистр

// Get the modal


var modal = document.getElementById('id01');
var form = document.querySelector('.modal-content');
var usernameInput = document.querySelector('input[name="uname"]');
var passwordInput = document.querySelector('input[name="psw"]');
var rememberCheckbox = document.querySelector('input[name="remember"]');
var cancelBtn = document.querySelector('.cancelbtn');


usernameInput.addEventListener('input', function(e) {
  this.value = this.value.replace(/[^a-zA-Zа-яА-Я]/g, '');
});

function clearForm() {
  usernameInput.value = '';
  passwordInput.value = '';
  rememberCheckbox.checked = true;
}

cancelBtn.addEventListener('click', function() {
  clearForm();
  modal.style.display = "none";
});

function validateForm(e) {
  e.preventDefault();
  
  var username = usernameInput.value.trim();
  var password = passwordInput.value.trim();
  
  if (username.length < 4) {
    alert("Имя пользователя должно содержать минимум 4 буквы");
    usernameInput.focus();
    return;
  }
  
  if (password.length < 6) {
    alert("Пароль должен содержать минимум 6 символов");
    passwordInput.focus();
    return;
  }
  
  alert("Привет, " + username + "!");
  clearForm();
  modal.style.display = "none";
}

form.addEventListener('submit', validateForm);

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    clearForm();
    modal.style.display = "none";
  }
});



// анимации 
// 1
function breathe() {
    $(".btn-primary")
        .animate({ opacity: 0.7, paddingLeft: "25px", paddingRight: "25px" }, 1000)
        .animate({ opacity: 1, paddingLeft: "15px", paddingRight: "15px" }, 1000, breathe);
}
$(document).ready(function() {
    breathe(); 
});


// 2

$(document).ready(function() {
    function animateOnScroll() {
        $('.jq-slide, .card, .kard1, .kard2, .ourstory, .ourstory22').each(function() {
            var elemPos = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scrollPos > elemPos - windowHeight + 200) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }

    $('.jq-slide, .card, .kard1, .kard2, .ourstory, .ourstory22').css({
        'opacity': '0',
        'transform': 'translateY(50px)',
        'transition': 'all 0.8s ease-out'
    });

    animateOnScroll();
    $(window).scroll(animateOnScroll);
});

// 3

$(document).ready(function() {
    function pulseStars() {
        $('.wrapper3 img').animate({
            opacity: 0.4,
            scale: 0.9
        }, 800, function() {
            $(this).animate({
                opacity: 1,
                scale: 1.1
            }, 800, pulseStars);
        });
    }
    pulseStars();
});

// 4....
