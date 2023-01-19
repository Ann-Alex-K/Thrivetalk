document.addEventListener('scroll', function () {
    const header = document.querySelector('.header-wrapper');

    if (scrollY >= 680) {
        header.classList.add('active');
    } else if (scrollY <= 680) {
        header.classList.remove('active');
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        })
    }
})