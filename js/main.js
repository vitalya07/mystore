var splide = new Splide( '.splide', {
    pagination: false,
    autoplay: true,
    rewind: true,
} );
splide.mount();
let progress = 0;
let progressBar = document.querySelector('.preloaded__progress');
let progressNumber = document.querySelector('.preloaded__number');
let preloader = document.querySelector('.preloaded');
let content = document.querySelector('.content');

let interval = setInterval(()=> {
    if(progress < 100) {
        progress++;
        progressBar.style.width = `${progress}%`;
        progressNumber.textContent = `${progress}%`
    } else {
        clearInterval(interval);
        preloader.style.display = 'none'
        content.style.display = 'block'
        
    }
}, 20)

