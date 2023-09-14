window.addEventListener('load', function() {
    var preloader = document.querySelector('.loader_container');
    
    if (preloader) {
        preloader.style.transition = 'opacity 1s';
        preloader.style.opacity = '0';
        
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 1000);
    }
});