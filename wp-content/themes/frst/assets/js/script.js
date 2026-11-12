const swiperClients = new Swiper('.swiper-clients', {

    loop: true,
    autoplay: {
        delay: 3500,
    }

    ,
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
        1400: {
            slidesPerView: 4,
        }

        ,
        1200: {
            slidesPerView: 4,
        }

        ,
        992: {
            slidesPerView: 3,
        }

        ,
        768: {
            slidesPerView: 2,
        }

        ,
        375: {
            slidesPerView: 2,
        }
    }
}

);

const swiperWorks = new Swiper('.swiper-works', {
    spaceBetween: 20,
    loop: false,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next-works',
        prevEl: '.swiper-button-prev-works',
    }

    ,
    pagination: {
        el: '.swiper-counter-works',
        type: 'fraction',
        clickable: true,
        // renderFraction: function (currentClass, totalClass) {
        //     return '<span class="' + currentClass + '"></span>' + ' <span>/ ' + '<span class="' + totalClass + '"></span></span>';
        // }
    }

    ,
}

);

const mySwiperCard = document.querySelectorAll('.swiper-card');
const mySwiperCardPagination = document.querySelectorAll('.swiper-pagination-card');
const mySwiperCardNext = document.querySelectorAll('.swiper-button-next-card');
const mySwiperCardPrev = document.querySelectorAll('.swiper-button-prev-card');

for (let i = 0; i < mySwiperCard.length; i++) {

    mySwiperCard[i].classList.add('swiper-card' + i);
    mySwiperCardPagination[i].classList.add('swiper-pagination-card' + i);
    mySwiperCardNext[i].classList.add('swiper-button-next-card' + i);
    mySwiperCardPrev[i].classList.add('swiper-button-prev-card' + i);

    var swiperCard = new Swiper(".swiper-card" + i, {

        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination-card" + i,
            clickable: true,
        }

        ,
        navigation: {
            nextEl: '.swiper-button-next-card' + i,
            prevEl: '.swiper-button-prev-card' + i,
        }

        ,
    }

    );
}

const swiperVideo = new Swiper('.swiper-video', {

    loop: false,
    navigation: {
        nextEl: '.swiper-button-next-video',
        prevEl: '.swiper-button-prev-video',
    }

    ,
    pagination: {
        el: ".swiper-pagination-video",
        clickable: true,
    }

    ,
}

);

const swiperLetters = new Swiper('.swiper-letters', {

    loop: false,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next-letters',
        prevEl: '.swiper-button-prev-letters',
    }

    ,
    pagination: {
        el: ".swiper-pagination-letters",
        clickable: true,
    }

    ,
    breakpoints: {
        1400: {
            slidesPerView: 4,
        }

        ,
        992: {
            slidesPerView: 3,
        }

        ,
        768: {
            slidesPerView: 2,
        }

        ,
        375: {
            slidesPerView: 1,
        }
    }
}

);

if (document.querySelector(".glightbox")) {
    const lightbox = GLightbox();

    lightbox.on('open', (target) => {
        console.log('lightbox opened');
    }

    );
}

(function () {
    if (!document.querySelector(".sd-price__ga")) {
        return;
    }

    const buttons = document.querySelectorAll('.sd-price__button');
    buttons.forEach(button => {
        const parent = button.closest('.b-price');
        const ga = parent.querySelector('.sd-price__ga');
        const checkbox = parent.querySelectorAll('.sd-price__checkbox');
        const total = parent.querySelector('.sd-price__total');
        const textarea_selecting = parent.querySelector('.sd-price__calc_selecting');
        const button_to_footer_form = parent.querySelector('.sd-price__to_form');

        let string = '';

        button.addEventListener('click', (e) => {
            e.preventDefault();
            let sum = 0;
            string = `${ga.getAttribute('data-name')}: ${ga.value ? ga.value : 0}\n`;

            checkbox.forEach(el => {
                if (el.checked) {
                    if (el.classList.contains('sd-price__checkbox-m3')) {
                        const m3 = el.closest('.sd-checkbox__box').querySelector('.sd-price__m3');

                        sum += Number(el.getAttribute('data-price')) * Number(m3.value);
                        string += `${el.getAttribute('data-name')}: ${m3.value ? m3.value : 0} (${m3.getAttribute('placeholder')})\n`;
                    } else {
                        sum += Number(el.getAttribute('data-price')) * Number(ga.value);
                        string += el.getAttribute('data-name') + "\n";
                    }
                }
            });

            string += `Итого: ${sum} руб.`;
            total.textContent = sum;
            textarea_selecting.value = string;

            if (button.classList.contains('sd-modal-link')) {
                if (document.querySelector('#modalDialog form.wpcf7-form [name="form-description"]')) {
                    document.querySelector('#modalDialog form.wpcf7-form [name="form-description"]').value = string;
                }
            }
        });

        button_to_footer_form.addEventListener('click', (e) => {
            if (document.querySelector('footer form.wpcf7-form [name="form-description"]')) {
                document.querySelector('footer form.wpcf7-form [name="form-description"]').value = string;
            }
        });
    })
})();

window.onload = function () {
    document.querySelector('.preloader').classList.add("preloader-remove");
};