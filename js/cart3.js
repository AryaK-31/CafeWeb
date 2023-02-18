const addBtn = document.querySelector('#addBtn');
const itemNameInput = document.querySelector('#itemName');
const itemPriceInput = document.querySelector('#itemPrice');
const cart = document.querySelector('#table');

addBtn.addEventListener('click', () => {
  const itemName = itemNameInput.value;
  const itemPrice = itemPriceInput.value;

  let existingRow = cart.querySelector(`tr td:first-child:contains(${itemName})`);

  if (existingRow) {
    const quantityCell = existingRow.nextElementSibling;
    const quantity = parseInt(quantityCell.textContent) + 1;
    quantityCell.textContent = quantity;
  } else {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${itemName}</td>
      <td>1</td>
      <td>${itemPrice}</td>
      <td>
        <button class="decreaseBtn">-</button>
        <button class="removeBtn">Remove</button>
      </td>
    `;
    cart.appendChild(newRow);
  }

  itemNameInput.value = '';
  itemPriceInput.value = '';
});

cart.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    e.target.parentNode.parentNode.remove();
  } else if (e.target.classList.contains('decreaseBtn')) {
    const quantityCell = e.target.parentNode.previousElementSibling;
    let quantity = parseInt(quantityCell.textContent) - 1;
    if (quantity === 0) {
      e.target.parentNode.parentNode.remove();
    } else {
      quantityCell.textContent = quantity;
    }
  }
});
