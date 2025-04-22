// Play audio on button click
const buttons = document.querySelectorAll('.sample');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const audio = new Audio(button.getAttribute('data-audio'));
    audio.play();
  });
});

// Search functionality
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();

  buttons.forEach(button => {
    const text = button.textContent.toLowerCase();
    button.style.display = text.includes(filter) ? '' : 'none';
  });
});

const searchButton = document.getElementById('searchButton');

function filterButtons() {
  const filter = searchInput.value.toLowerCase();
  buttons.forEach(button => {
    const text = button.textContent.toLowerCase();
    button.style.display = text.includes(filter) ? '' : 'none';
  });
}

// Call filter function on both input and button click
searchInput.addEventListener('input', filterButtons);
searchButton.addEventListener('click', filterButtons);
