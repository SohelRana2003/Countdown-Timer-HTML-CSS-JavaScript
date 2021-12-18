(function() {
    'use strict';

    // Pupup Window
    const Timer = document.querySelector('#srTimer');
    const Toggle = document.querySelector('#srtimerIcon');
    const Close = document.querySelector('.close');

    window.addEventListener('load', function() {
        this.setTimeout(function(){
            Timer.classList.add('active');
        }, 3000);
    });

    Toggle.addEventListener('click', function() {
        Timer.classList.add('active');
    });

    Close.addEventListener('click', function() {
        Timer.classList.remove('active');
    });

    // Countdown Timer
    let days = document.querySelector('.days');
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');

    let countTime = new Date('Jan 01, 2022 00:00:00').getTime();

    function newYear() {
        let now = new Date().getTime();
        let gap = countTime - now;

        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day)) / (hour));
        let m = Math.floor((gap % (hour)) / (minute));
        let s = Math.floor((gap % (minute)) / (second));

        days.textContent = d;
        hours.textContent = h;
        minutes.textContent = m;
        seconds.textContent = s;
    }

    let timer = setInterval(function() {
        newYear();
    }, 1000);

})();