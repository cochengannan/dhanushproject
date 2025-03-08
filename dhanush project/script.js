document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;

    // Display confirmation message
    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('hidden');
    confirmation.innerHTML = `
        <h2>Booking Confirmation</h2>
        <p>From: ${from}</p>
        <p>To: ${to}</p>
        <p>Date: ${date}</p>
        <p>Passengers: ${passengers}</p>
    `;

    // Clear the form
    document.getElementById('bookingForm').reset();
});