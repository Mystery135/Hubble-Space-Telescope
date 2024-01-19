document.addEventListener('DOMContentLoaded', function () {
    const starrySky = document.querySelector('.starry-sky');
    const numberOfStars = 300;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random position
        star.style.left = Math.random() * -100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';

        // Random animation duration (between 2 and 5 seconds)
        star.style.animationDuration = 5 + Math.random() * 9 + 's';

        // Random animation delay (up to 5 seconds)
        star.style.animationDelay = Math.random() * 5 + 's';

        star.style.zIndex = 1;

        starrySky.appendChild(star);
    }
});
function history(){window.location.href = 'history.html';}
function home(){window.location.href = 'index.html';}
function futurePlans(){window.location.href = 'future-plans.html';}
function instrumentOverview(){window.location.href = 'instrument-overview.html';}
function discoveries(){window.location.href = 'discoveries.html';}
function references(){window.location.href = 'references.html';}