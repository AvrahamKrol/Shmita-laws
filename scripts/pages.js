import { vegetables } from '../mock/vegetables.js';
import { fruits } from '../mock/fruits.js';
const choice = localStorage.getItem('produce');
const wrapper = document.getElementById('wrapper');
const btn = document.getElementById('btn');
const modalBtn = document.getElementById('modal');
const sortedVegetables = vegetables.sort((a, b) =>
  a.name.localeCompare(b.name)
);
const sortedFruits = fruits.sort((a, b) => a.name.localeCompare(b.name));
const modal = document.getElementById('separation_modal');
const temp = (item) => {
  return `
    <div class="container">
      <p class="veg_items">${item.name}</p> <p class="veg_items">${item.end}</p>
    </div>
  `;
};

const produceHtml = (produce, sortedProduce) => {
  if (produce.length === 0) {
    wrapper.innerHTML = `
    <p>Empty page</p>
    `;
  } else {
    const vegsHTML = sortedProduce
      .map((item) => {
        return temp(item);
      })
      .join('');
    wrapper.insertAdjacentHTML('beforeend', vegsHTML);
  }
};

if (choice === 'vegetables') {
  produceHtml(vegetables, sortedVegetables);
}

if (choice === 'fruits') {
  produceHtml(fruits, sortedFruits);
}

btn.addEventListener('click', () => {
  window.location.href = 'index.html';
});

modalBtn.addEventListener('click', (event) => {
  modal.style.display = 'block';
});

document.addEventListener('click', (event) => {
  if (
    !event.target.closest('.separation_container') &&
    event.target.innerHTML !== 'здесь'
  ) {
    modal.style.display = 'none';
  }
});
