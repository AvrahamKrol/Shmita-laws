const veg = document.getElementById('vegetables');
const fruit = document.getElementById('fruits');
veg.addEventListener('click', (event) => {
  console.log(event.target.id);
  localStorage.setItem('produce', event.target.id);
  window.location.href = 'produce_zmanim.html';
});
fruit.addEventListener('click', (event) => {
  console.log(event.target.id);
  localStorage.setItem('produce', event.target.id);
  window.location.href = 'produce_zmanim.html';
});
