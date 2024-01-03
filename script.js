const showTime = () => {

    const clock = document.querySelector('.clock');

    let currentTime = new Date();
    let hh = currentTime.getHours();
    let mm = currentTime.getMinutes();
    let ss = currentTime.getSeconds();

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;
    

    let time = `${hh}:${mm}:${ss}`;
    clock.innerHTML = time;
};

showTime();
setInterval((showTime), 1000);