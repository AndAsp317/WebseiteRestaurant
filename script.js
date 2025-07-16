document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const msg = document.getElementById('message').value;
    const response = document.getElementById('responseMsg');

    if (name && msg) {
        response.textContent = `Grazie mille, ${name}, für Ihre Nachricht!`;
        this.reset();
    } else {
        response.textContent = "Bitte alle Felder ausfüllen.";
    }
});
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('resName').value;
    const email = document.getElementById('resEmail').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const guests = document.getElementById('resGuests').value;
    const resMsg = document.getElementById('reservationMsg');

    if (name && email && date && time && guests) {
        resMsg.textContent = `Grazie mille, ${name}! Ihre Reservierung für ${guests} Person(en) am ${date} um ${time} wurde empfangen.`;
        this.reset();
    } else {
        resMsg.textContent = "Bitte alle Felder korrekt ausfüllen.";
    }
});

document.getElementById('menuToggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});
