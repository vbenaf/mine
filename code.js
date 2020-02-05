window.onload = function () {
    document.querySelector('.menu-active').addEventListener('click', function (e, i) {
        document.querySelector('.nav-active').classList.toggle('display');
    })

    const checkSize = () => {
        if ((window.matchMedia('(min-width: 799px)').matches)) {
            document.querySelector('.nav-active').classList.remove('display');
        }
    }

    setInterval(checkSize,10);
}