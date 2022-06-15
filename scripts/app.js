const openMenuBtn = document.querySelector('.menu__container');
const linksMenu = document.querySelector('.links__container');
const pageOverlay = document.querySelector('#page-overlay');
const cartBtn = document.querySelector('#icon-cart');
const ordersPage = document.querySelector('.orders__container');

const productQuantity = document.querySelector('#produce-quantity-number');
const plusIcon = document.querySelector('#p-price-icon-plus');
const minusIcon = document.querySelector('#p-price-icon-minus');

const orderCountIcon = document.querySelector('#item-count');
const btnAddOrder = document.querySelector('#product-buy-btn');
const orderEmptyMsg = document.querySelector('.order-empty');
const orderCheckoutBtn = document.querySelector('.checkout-btn');
const ordersList = document.querySelector('.order');

const addOrder = function () {
  if (+productQuantity.textContent === 0) return;
  orderCheckoutBtn.classList.add('show-checkout-btn');
  const orderQuantity = productQuantity.textContent;
  addOrderMarkup(orderQuantity);
};

const addOrderMarkup = function (orderQuantity) {
  const orderMarkup = `
  <li class="order-item">
  <ul>
    <li>
      <div class="order-img">
        <img
          id="product-img"
          src="./images/image-product-1-thumbnail.jpg"
          alt=""
        />
      </div>
    </li>
    <li>
      <div class="order-datails">
        <p>Fall Limited Edition Sneakers</p>
        <p>
          $125.00 x <span class="order-count">${orderQuantity}</span>
          <span class="order-price">$375.00</span>
        </p>
      </div>
    </li>
  
    <li id="delete-order">
      <img src="./images/icon-delete.svg" alt="" />
    </li>
  </ul>
  </li>
  `;

  orderEmptyMsg.classList.add('remove-empty-msg');
  ordersList.insertAdjacentHTML('afterbegin', orderMarkup);
  checkCountOrders();
  orderCountIcon.classList.add('show-item-count');

  removeOrder();
};

const removeOrder = function () {
  const iconRemoveOrders = document.querySelectorAll('#delete-order');

  iconRemoveOrders.forEach((el) => {
    el.addEventListener('click', function (e) {
      e.target.parentElement.parentElement.remove();
    });
  });
};

const test = function () {};

const checkCountOrders = function () {
  const orderItems = document.querySelectorAll('.order-item');
  orderCountIcon.textContent = orderItems.length;
};

plusIcon.addEventListener('click', function () {
  productQuantity.textContent++;
});

minusIcon.addEventListener('click', function () {
  console.log('t');
  if (+productQuantity.textContent > 0) {
    productQuantity.textContent--;
  }
});

openMenuBtn.addEventListener('click', function () {
  linksMenu.classList.toggle('show-links');
  pageOverlay.classList.toggle('show-overlay');

  pageOverlay.addEventListener('click', () => {
    linksMenu.classList.toggle('show-links');
    pageOverlay.classList.toggle('show-overlay');
  });
});

cartBtn.addEventListener('click', () => {
  ordersPage.classList.toggle('show-orders');
});

btnAddOrder.addEventListener('click', addOrder);
