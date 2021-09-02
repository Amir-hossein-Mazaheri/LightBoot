//creating preload element
function $preLoader() {
    const preLoader = document.createElement('div');
    preLoader.classList.add('prePageLoader');
    document.querySelector('html').prepend(preLoader);
    
    //when window is fully loaded preload thing disappears
    window.addEventListener('load', function () {
        const loader = document.querySelector('.prePageLoader');
        loader.style.opacity = '0';
        setInterval(function () {
           loader.remove();
        }, 500)

    })
}
