import './style.css';
import { Drink } from './Drink/index.js';

console.log('funguju!');

/*.........zprovozneni navigace.......*/
const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const navLinkElm = document.querySelectorAll('.nav-link');

for (let i = 0; i < navLinkElm.length; i++) {
  navLinkElm[i].addEventListener('click', () => {
    navElm.classList.add('nav-closed');
  });
}

/*...........objednavani........*/

const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');

/* orderBtnElm.addEventListener('click', () => {
  orderBtnElm.textContent = 'Zrušit';
  drinkCupElm.classList.add('drink__cup--selected');
}); */

/* let ordered = '';
orderBtnElm.addEventListener('click', () => {
  if (ordered) {
    orderBtnElm.textContent = 'Zrušit';
    drinkCupElm.classList.add('drink__cup--selected');
    ordered = false;
  } else {
    orderBtnElm.textContent = 'Objednat';
    drinkCupElm.classList.remove('drink__cup--selected');
    ordered = true;
  }
}); */

/*......ingredience jako komponenty.....*/

const drinkInfoElm = document.querySelector('.drink__info');

/* drinkInfoElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
drinkInfoElm.innerHTML += Layer({ color: '#fed7b0', label: 'teplé mléko' });
drinkInfoElm.innerHTML += Layer({ color: '#613916', label: 'espresso' }); */

/*................seznam ingredienci.....*/

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

/* for (let i = 0; i < layers.length; i++) {
  drinkInfoElm.innerHTML += Layer(layers[i]);
} */

/*............napoj jako komponenta...........*/

const drink = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

document.querySelector('.drinks-list').appendChild(Drink(drink));
