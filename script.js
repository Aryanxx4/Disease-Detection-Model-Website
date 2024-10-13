// JavaScript for handling navigation and form submission

// Function to navigate to different pages
function navigateTo(page) {
    window.location.href = page;
}

// Function to handle form submission for registration
function submitRegistrationForm(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        alert(`Thank you for registering, ${name}! We will contact you at ${email}.`);
        // Here you can add the logic to send the data to your server or save it
    } else {
        alert('Please fill in all required fields.');
    }
}
