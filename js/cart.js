let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})


let products = [
    {
        id: "One",
        number: 1,
        type: "arabica",
        reviews: 'Star-products.png',
        fav: 'red-heart.png',
        name: 'Arabica Coffee Beans #1',
        image: 'product.png',
        price: 13
    },
    {
        id: "Tow",
        number: 2,
        type: "robusta",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Robusta Coffee Beans #2',
        image: 'product.png',
        price: 13
    },
    {
        id: "Three",
        number: 3,
        type: "arabica",
        reviews: 'Star-products.png',
        fav: 'red-heart.png',
        name: 'Arabica Coffee Beans #3',
        image: 'product.png',
        price: 13
    }
    ,
    {
        id: "Four",
        number: 4,
        type: "robusta",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Robusta Coffee Beans #4',
        image: 'product.png',
        price: 13
    },
    {
        id: "Five",
        number: 5,
        type: "excelsa",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Excelsa Coffee Beans #5',
        image: 'product.png',
        price: 13
    },
    {
        id: "Six",
        number: 6,
        type: "excelsa",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Excelsa Coffee Beans #6',
        image: 'product.png',
        price: 13
    },
    {
        id: "Seven",
        number: 7,
        type: "arabica",
        reviews: 'Star-products.png',
        fav: 'red-heart.png',
        name: 'Arabica Coffee Beans #7',
        image: 'product.png',
        price: 13
    },
    {
        id: "Eight",
        number: 8,
        type: "liberica",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Liberica Coffee Beans #8',
        image: 'product.png',
        price: 13
    },
    ,
    {
        id: "Nine",
        number: 9,
        type: "robusta",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Robusta Coffee Beans #9',
        image: 'product.png',
        price: 13
    },
    {
        id: "Ten",
        number: 10,
        type: "arabica",
        reviews: 'Star-products.png',
        fav: 'red-heart.png',
        name: 'Arabica Coffee Beans #10',
        image: 'product.png',
        price: 13
    },
    {
        id: "Eleven",
        number: 11,
        type: "liberica",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Liberica Coffee Beans #11',
        image: 'product.png',
        price: 13
    },
    {
        id: "Twelve",
        number: 12,
        type: "excelsa",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Excelsa Coffee Beans #12',
        image: 'product.png',
        price: 13
    },
    {
        id: "Thirteen",
        number: 13,
        type: "arabica",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Arabica Coffee Beans #13',
        image: 'product.png',
        price: 13
    },
    {
        id: "Fourteen",
        number: 14,
        type: "robusta",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Robusta Coffee Beans #14',
        image: 'product.png',
        price: 13
    },
    {
        id: "Fifteen",
        number: 15,
        type: "excelsa",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Excelsa Coffee Beans #15',
        image: 'product.png',
        price: 13
    },
    {
        id: "Sixteen",
        number: 16,
        type: "robusta",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Robusta Coffee Beans #16',
        image: 'product.png',
        price: 13
    },
    {
        id: "Seventeen",
        number: 17,
        type: "liberica",
        reviews: 'Star-products.png',
        fav: 'empty-heart.png',
        name: 'Liberica Coffee Beans #17',
        image: 'product.png',
        price: 13
    },
    {
        id: "Eighteen",
        number: 18,
        type: "arabica",
        reviews: 'Star-products.png',
        fav: 'red-heart.png',
        name: 'Arabica Coffee Beans #18',
        image: 'product.png',
        price: 13
    },
];

let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="card">
        <div class="product-icons">
            <img src="images/${value.reviews}">
            <img src="images/${value.fav}">
            </div>
            <a href="singleProduct.html">
            <img class="shop-item-image" src="images/${value.image}" alt="product" style="width:100%">
            <div class="content">
            <p class="product-name title">${value.name}</p>
            </div>
            </a>
            <hr>
            <div class="card-footer">
            <p class="price"><span style="color: rgba(128, 128, 128, 0.548); text-decoration: line-through;">$20 
            </span>$${value.price.toLocaleString()} </p>
            <img class="card-img" src="images/shoppingbag.png" onclick="addToCard(${key})" alt="cart" width="30px" height="30px">
            </div>
            </div>`
            ;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }

    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div class="pname-cart">${value.name}</div>
                <div class="pprice-cart">${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = `$${totalPrice.toLocaleString()}`;
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}