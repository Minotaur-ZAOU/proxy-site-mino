const canvas = document.getElementById('clockCanvas');
const context = canvas.getContext('2d');

function drawClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const radius = canvas.width / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(radius, radius, radius - 10, 0, 2 * Math.PI);
    context.strokeStyle = 'white';
    context.lineWidth = 5;
    context.stroke();
    context.save();
    context.translate(radius, radius);
    context.rotate((Math.PI / 30) * (minutes + seconds / 60));
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -radius * 0.5);
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    context.stroke();
    context.restore();

    context.save();
    context.translate(radius, radius);
    context.rotate((Math.PI / 6) * (hours + minutes / 60));
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -radius * 0.4);
    context.strokeStyle = 'black';
    context.lineWidth = 7;
    context.stroke();
    context.restore();

    context.save();
    context.translate(radius, radius);
    context.rotate((Math.PI / 30) * seconds);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -radius * 0.8);
    context.strokeStyle = 'red';
    context.lineWidth = 2;
    context.stroke();
    context.restore();

    setTimeout(drawClock, 1000);
}

let clockVisible = false;

function toggleClock() {
    clockVisible = !clockVisible;
    document.querySelector('.clock-container').style.display = clockVisible ? 'flex' : 'none';
    if (clockVisible) { drawClock(); }
}

drawClock();

// Node Unblockerの埋め込みその他のスクリプト
