// Add an event listener to the contact button
const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', function() {
  // Toggle the visibility of the contact page
  const contactPage = document.querySelector('.contact-page');
  contactPage.classList.toggle('hidden');
});

// Add event listeners to the see more buttons
const seeMoreButtons = document.querySelectorAll('.see-more-button');
seeMoreButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Toggle the visibility of the content
    const content = button.parentElement.querySelector('.content');
    content.classList.toggle('hidden');

    // Change the text of the button
    if (content.classList.contains('hidden')) {
      button.textContent = 'See More';
    } else {
      button.textContent = 'See Less';
    }
  });
});
