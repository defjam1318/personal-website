export function toggleBox(box, message) {
    const boxes = {
        errorBox: document.querySelector('#errorBox'),
        loadingBox: document.querySelector('#loadingBox'),
        infoBox: document.querySelector('#successBox')
    }
    const fns = {
        errorBox: () => {
            boxes.errorBox.textContent = message;
            boxes.errorBox.style.display = 'block';
            boxes.errorBox.addEventListener('click', () => {
                boxes.errorBox.style.display = 'none';
            });
        },
        infoBox: () => {
            boxes.infoBox.textContent = message;
            boxes.infoBox.style.display = 'block';
            const timeOut = setTimeout(() => {
                boxes.infoBox.style.display = 'none';
            }, 5000);
            boxes.infoBox.addEventListener('click', () => {
                boxes.infoBox.style.display = 'none';
                clearTimeout(timeOut);
            });
        },
        loadingBox: () => {
            boxes.loadingBox.style.display === 'block'
                ? boxes.loadingBox.style.display = 'none'
                : boxes.loadingBox.style.display = 'block';
        }
    }
    fns[box]();
}