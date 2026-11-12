/* ==========================================================================
   REDESIGN 2026 — новый, изолированный JS. Существующий script.js/modal.js
   НЕ изменяются. Только новая косметика: круглая кнопка PLAY в видео-блоке
   (ТЗ, раздел 18). Механика воспроизведения видео не меняется.
   ========================================================================== */

(function () {
    function initVideoPlay() {
        var frames = document.querySelectorAll('.b-video__frame');

        Array.prototype.forEach.call(frames, function (frame) {
            if (frame.dataset.rdPlayInit) {
                return;
            }
            frame.dataset.rdPlayInit = '1';

            var video = frame.querySelector('video');
            var play = frame.querySelector('.b-video__play');

            if (!video || !play) {
                return;
            }

            function sync() {
                if (video.paused || video.ended) {
                    play.classList.remove('b-video__play--hidden');
                } else {
                    play.classList.add('b-video__play--hidden');
                }
            }

            play.addEventListener('click', function () {
                video.play();
            });

            video.addEventListener('play', sync);
            video.addEventListener('pause', sync);
            video.addEventListener('ended', sync);

            sync();
        });
    }

    function initGallery() {
        var el = document.querySelector('.swiper-gallery');

        if (!el || typeof Swiper === 'undefined') {
            return;
        }

        new Swiper('.swiper-gallery', {
            loop: false,
            spaceBetween: 24,
            navigation: {
                nextEl: '.swiper-button-next-gallery',
                prevEl: '.swiper-button-prev-gallery'
            },
            pagination: {
                el: '.swiper-pagination-gallery',
                clickable: true
            },
            breakpoints: {
                1400: {
                    slidesPerView: 4
                },
                992: {
                    slidesPerView: 3
                },
                576: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                }
            }
        });
    }

    function removePreloader() {
        var preloader = document.querySelector('.preloader');

        if (preloader) {
            preloader.classList.add('preloader-remove');
        }
    }

    function initPreloader() {
        if (!document.querySelector('.preloader')) {
            return;
        }

        window.addEventListener('load', removePreloader);
        setTimeout(removePreloader, 3000);
    }

    function init() {
        initVideoPlay();
        initGallery();
        initPreloader();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
