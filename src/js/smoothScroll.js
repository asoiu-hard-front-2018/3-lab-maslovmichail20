(function() {
    const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction))
}

function animate(options) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = options.timing(timeFraction);
        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

export default function smoothScrollToBlog(event) {
    event.preventDefault();

    let initScrollTop = window.pageYOffset;
    let needScrollTop = document.querySelector('.blog').offsetTop + document.body.offsetWidth*0.07;
    let difScroll = needScrollTop - initScrollTop;
    let duration = Math.abs(1.5*difScroll);

    animate({
        duration: duration,
        timing: makeEaseOut(circ),
        draw: function(progress) {
            window.scrollTo(0, initScrollTop + difScroll * progress);
        }
    });
}