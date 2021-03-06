const cvs = document.getElementById('canvas');
const context = cvs.getContext('2d');
const position = Array(300).join(0).split('');
const w = document.body.clientWidth;
const h = document.body.clientHeight;

cvs.width = w;
cvs.height = h;


const initMatrix = () => {
    context.fillStyle = 'rgba(0, 15, 2, 0.1)';
    context.fillRect(0, 0, w, h);

    context.fillStyle = '#00FF00';
    context.font = '11pt';

    position.map((y, index) => {
        const text = String.fromCharCode(1e3 + Math.random() * 30);
        const x = index * 15;

        canvas.getContext('2d').fillText(text, x, y);

        y > 100 + Math.random() * 1e5 ? (position[index] = 0) : (position[index] = y + 15);
    });
};

setInterval(initMatrix, 50);