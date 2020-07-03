(function () {
  // Фабрика слайдера отзывы
  function reviewsSlider(id) {
    const slider = $(id);
    if (slider) {
      $(slider).slick({
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><span class="visually-hidden">Предыдущий слайд</span><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.46117 0L9 1.53883L3.94384 6.595L9 11.6512L7.46117 13.19L0.86617 6.595L7.46117 0Z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="visually-hidden">Следующий слайд</span><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.53883 0L0 1.53883L5.05616 6.595L0 11.6512L1.53883 13.19L8.13383 6.595L1.53883 0Z"/></svg></button>',
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 861,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }
  }
  reviewsSlider('#reviews-slider');
  // Фабрика ссылок плавного скрола
  function softScroll(element) {
    $(element).click(function (event) {
      $([document.documentElement, document.body]).animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 2000);
      $('.page-header__menu-wrapper.show').removeClass('show');
      return false;
    });
  }
  softScroll('.main-menu a');
  // Работа с модальными окнами
  function modalOpen(element) {
    $(element).click(function (event) {
      $($(this).attr('href')).addClass('show');
      $('.modal__overlay').addClass('show');
      return false;
    });
  }
  modalOpen('.modal-trigger');
  function modalClose(element) {
    $(element).click(function (event) {
      $(this).parent('.modal').removeClass('show');
      $('.modal__overlay').removeClass('show');
      return false;
    });
  }
  modalClose('.js--modal__close');
  function keyboardModalClose(key) {
    $(document).keydown(function (event) {
      if (event.key == key) {
        $('.modal').removeClass('show');
        $('.modal__overlay').removeClass('show');
      }
    });
  }
  keyboardModalClose('Escape');
  // Яндекс карта
  function yandexMapConstructor(element, coords, description) {
    ymaps.ready(init);
    function init() {
      let yaMap = new ymaps.Map(element, {
        center: coords,
        zoom: 15,
        controls: []
      });
      let myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          coordinates: coords
        },
        properties: {
          iconCaption: description
        }
      }, {
        preset: 'islands#redCircleDotIcon'
      });
      yaMap.geoObjects.add(myGeoObject);
    }
  }
  yandexMapConstructor('map', [53.881987,27.561598], 'улица Володько, 6');
  // Мобильное меню - Открыть
  function openAside(trigger, destination) {
    $(trigger).on( 'click', function(){
      $(destination).addClass('show');
    });
  }
  openAside('.menu-trigger', '.page-header__menu-wrapper')
  // Мобильное меню - Закрыть
  function closeAside(trigger, destination) {
    $(trigger).on( 'click', function(){
      $(destination).removeClass('show');
    });
  }
  closeAside('.main-menu__close', '.page-header__menu-wrapper')
})();
