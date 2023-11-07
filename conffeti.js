const confettiContainer = document.querySelector('.confetti-container');
const colors = ['#ffcc33', '#ff3366', '#33cc33', '#3399ff', '#9966cc'];

for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.className = 'confetti';
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.animationDelay = `${Math.random()}s`;
    confettiContainer.appendChild(confettiPiece);
}
