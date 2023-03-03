const menuEmail = document.querySelector('.navbar-email');
const sidebarMenu = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');

const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
sidebarMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetail);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    shoppingCartContainer.classList.contains('inactive') ? '' : shoppingCartContainer.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');

    shoppingCartContainer.classList.contains('inactive') ? '' : shoppingCartContainer.classList.toggle('inactive');

    productDetailContainer.classList.contains('inactive') ? '' : productDetailContainer.classList.toggle('inactive');
}

function toggleShoppingCart() {
    shoppingCartContainer.classList.toggle('inactive');

    mobileMenu.classList.contains('inactive') ? '' : mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.contains('inactive') ? '' : desktopMenu.classList.toggle('inactive');

    productDetailContainer.classList.contains('inactive') ? '' : productDetailContainer.classList.toggle('inactive');
}

function openProductDetail() {
    shoppingCartContainer.classList.contains('inactive') ? '' : shoppingCartContainer.classList.toggle('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

function renderProducts( arrayProducts ) {

    for( product of arrayProducts ) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.classList.add('product-img');
        img.setAttribute('src', product.image);
        img.setAttribute('alt', 'producto');
        img.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productFigure = document.createElement('figure');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImg.setAttribute('alt', 'add to cart');
    
        productFigure.appendChild(productImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
    
    
}

const productList = [];

productList.push({
    name: 'Laptop',
    price: 120,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/monitors/mateview-gt/size-0526.png'
});

productList.push({
    name: 'Bicicleta',
    price: 150,
    image: 'https://i0.wp.com/www.tubici.com/wp-content/uploads/2022/04/bicicleta-profit-aspen-29-negro-verde-1.jpg?fit=1200%2C1200&ssl=1'
});

renderProducts(productList);