let cart = [];

const table = document.getElementById('cart-body');
const total = document.getElementById('total');

function updateTotal() {
    let sum = 0;
    const rows = table.querySelectorAll('tr');
    rows.forEach((row) => {
      const cell = row.querySelector('td:nth-child(3)');
      sum += parseFloat(cell.textContent);
    });
    total.innerHTML = sum;
  }

function addToCart(item,price) {
    let existingItem = cart.find(function (i) {
        return i.name === item;
    });
    if (existingItem) {
        existingItem.quantity++;
        existingItem.price_item = price * existingItem.quantity;
        
    } else {
        cart.push({
            name: item,
            quantity: 1,
            price_item : price
        });

    }
    renderCart();
}

function removeFromCart(item,price) {
    let existingItem = cart.find(function (i) {
        return i.name === item;
    });
    if (existingItem && existingItem.quantity != 0) {
        existingItem.quantity--;
        existingItem.price_item = price * existingItem.quantity;
    } 
    renderCart();
}

function renderCart() {
    let cartBody = document.getElementById("cart-body");
    cartBody.innerHTML = "";
    cart.forEach(function (item) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.name}</td><td>${item.quantity}</td><td>${item.price_item}</td>`;
        cartBody.appendChild(tr);
        if(item.quantity == 0){
            cartBody.removeChild(tr);
        }
        updateTotal();
    });
}

// start of Burgers : 
const atbBtn = document.getElementById("atb-btn");
const atbBtnMin = document.getElementById("atb-btn-min");
atbBtn.addEventListener("click", function () {
    const n = document.getElementById('b1').innerHTML
    addToCart(n,40);
});
atbBtnMin.addEventListener("click", function () {
    const n = document.getElementById('b1').innerHTML
    removeFromCart(n,40);
});


const hcpbBtn = document.getElementById("hcpb-btn");
const hcpbBtnMin = document.getElementById("hcpb-btn-min");
hcpbBtn.addEventListener("click", function () {
    const n = document.getElementById('b2').innerHTML
    addToCart(n,50);
});
hcpbBtnMin.addEventListener("click", function () {
    const n = document.getElementById('b2').innerHTML
    removeFromCart(n,50);
});


const vbBtn = document.getElementById("vb-btn");
const vbBtnMin = document.getElementById("vb-btn-min");
vbBtn.addEventListener("click", function () {
    const n = document.getElementById('b3').innerHTML
    addToCart(n,45);
});
vbBtnMin.addEventListener("click", function () {
    const n = document.getElementById('b3').innerHTML
    removeFromCart(n,45);
});


const sbBtn = document.getElementById("sb-btn");
const sbBtnMin = document.getElementById("sb-btn-min");
sbBtn.addEventListener("click", function () {
    const n = document.getElementById('b4').innerHTML
    addToCart(n,50);
});
sbBtnMin.addEventListener("click", function () {
    const n = document.getElementById('b4').innerHTML
    removeFromCart(n,50);
});


const pbBtn = document.getElementById("pb-btn");
const pbBtnMin = document.getElementById("pb-btn-min");
pbBtn.addEventListener("click", function () {
    const n = document.getElementById('b5').innerHTML
    addToCart(n,60);
});
pbBtnMin.addEventListener("click", function () {
    const n = document.getElementById('b5').innerHTML
    removeFromCart(n,60);
});


const csbBtn = document.getElementById("csb-btn");
const csbBtnMin = document.getElementById("csb-btn-min");
csbBtn.addEventListener("click", function () {
    const n = document.getElementById('b6').innerHTML
    addToCart(n,70);
});
csbBtnMin.addEventListener("click", function () {
    const n = document.getElementById('b6').innerHTML
    removeFromCart(n,70);
});


const cbBtn = document.getElementById("cb-btn");
const cbBtnMin = document.getElementById("cb-btn-min");
cbBtn.addEventListener("click", function () {
    const n = document.getElementById('b7').innerHTML
    addToCart(n,70);
});
cbBtnMin.addEventListener("click", function () {
    const n = document.getElementById('b7').innerHTML
    removeFromCart(n,70);
});

// End of Burgers