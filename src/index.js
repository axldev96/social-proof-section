import db from '../db.js';

async function userCard() {
  const container = document.querySelector('.testimonials');

  const { testimonials } = await db();

  for (const testimonial of testimonials) {
    const { pic, username, verified, quote } = testimonial;

    const html = `
      <div class="card">
        <header class="card-header">
          <img class="user-pic" src="${pic}" alt="${username} pic" />
          <div class="titles">
            <h2 class="username">${username}</h2>
            <p class="verified">${verified}</p>
          </div>
        </header>
        <div class="quote">
          <p>${quote}</p>
        </div>
      </div>
  `;
    container.innerHTML += html;
  }
}

function ratingStars() {
  const starsContainers = document.querySelectorAll('.stars');

  starsContainers.forEach((element) => {
    for (let i = 0; i < 5; i++) {
      const html = `
    <img
      class="star"
      src="./src/images/icon-star.svg"
      alt="star icon"
    />
  `;
      element.innerHTML += html;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  ratingStars();
  userCard();
});
