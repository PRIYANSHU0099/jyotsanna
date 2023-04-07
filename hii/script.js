// Validation for contact form
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // Check if name is empty
  if (!name) {
    alert('Please enter your name.');
    return;
  }

  // Check if email is empty or not valid
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  // Check if message is empty
  if (!message) {
    alert('Please enter a message.');
    return;
  }

  // Clear form inputs and show success message
  form.elements.name.value = '';
  form.elements.email.value = '';
  form.elements.message.value = '';
  alert('Thank you for your message!');

});
