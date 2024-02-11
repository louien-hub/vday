const noButton = document.getElementById('noButton');
let hoverCount = 0;

const mouseoverHandler = () => {
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    const newX = Math.random() * (pageWidth - noButton.offsetWidth);
    const newY = Math.random() * (pageHeight - noButton.offsetHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';

    hoverCount++;

    if (hoverCount === 5) {
        document.getElementById('message').textContent = "You said no 5 times!";
    }

    if (hoverCount === 7) {
        document.getElementById('message').textContent = "No?";
        noButton.removeEventListener('mouseover', mouseoverHandler); // Remove the event listener
    }
};

noButton.addEventListener('mouseover', mouseoverHandler);
