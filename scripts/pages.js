import { vegetables } from '../mock/vegetables.js';
const main = document.getElementById('main');
const btn = document.getElementById('btn');
const sortedVegetables = vegetables.sort((a, b) =>
  a.name.localeCompare(b.name)
);

const temp = (item) => {
  return `
    <div class="container">
      <p class="veg_items">${item.name}</p> <p class="veg_items">${item.end}</p>
    </div>
  `;
};

if (vegetables.length === 0) {
  main.innerHTML = `
  <p>Empty page</p>
  `;
} else {
  const vegsHTML = sortedVegetables
    .map((item) => {
      return temp(item);
    })
    .join('');
  console.log(vegsHTML);
  main.insertAdjacentHTML('beforeend', vegsHTML);
}

btn.addEventListener('click', () => {
  window.location.href = 'index.html';
});
