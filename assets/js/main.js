document.addEventListener("DOMContentLoaded", function () {
  // Breaking News Slider
  var swiper = new Swiper(".breakingSwiper", {
    loop: true,
    slidesPerView: 2.5,   
    spaceBetween: 10,     
    breakpoints: {
      0: {          
        slidesPerView: 1.2,
      },
      576: {       
        slidesPerView: 2,
      },
      992: {       
        slidesPerView: 3.5,
      }
    },
    navigation: {
      nextEl: ".breaking-button-next",
      prevEl: ".breaking-button-prev",
    },
  });

  // Thumbnail Slider
  const thumbSlider = new Swiper('.thumb-slider', {
    slidesPerView: 4,
    spaceBetween: 5,
    breakpoints: {
      0: {          
        slidesPerView: 2.3,
      },
      576: {       
        slidesPerView: 2.3,
      },
      992: {       
        slidesPerView: 4,
      },
    },
    watchSlidesProgress: true,
  });

  // Main Slider
  const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 1.4,
    spaceBetween: 10,
    breakpoints: {
      0: {          
        slidesPerView: 1.2,
      },
      576: {       
        slidesPerView: 1.2,
      },
      992: {       
        slidesPerView: 1.5,
      },
    },
    thumbs: {
      swiper: thumbSlider,
    },
  });

  // Tarih Gösterimi
  const dateElement = document.querySelector('.news-date');
  const now = new Date();
  const formattedDate = now.toLocaleString('tr-TR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  dateElement.textContent = formattedDate;

  const timeElement = document.querySelector('.news-time');
  const formattedTime = now.toLocaleString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit'
  });
  timeElement.textContent = formattedTime;

  // Mobil Menü 
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileSidebar = document.querySelector('.mobile-sidebar');
  const closeBtn = document.querySelector('.close-btn');
  const overlay = document.querySelector('.menu-overlay');

  // Menü açma
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; 
  });

  closeBtn.addEventListener('click', () => {
    mobileSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; 
  });

  overlay.addEventListener('click', () => {
    mobileSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileSidebar.classList.contains('active')) {
      mobileSidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});