const d = document,
    $navButton = d.querySelector('.fa-bars'),
    $navBar = d.querySelector('.navBar'),
    $pendingOrder = d.querySelector('.pendingOrders'),
    $bought = d.querySelector('.bougth'),
    $outOfStock = d.querySelector('.outOfStock'),
    $fragment = d.createDocumentFragment();

d.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'I') {
        $navBar.classList.toggle('hidden');
    }
});

const makingProduct = () => {
    d.addEventListener('DOMContentLoaded', () => {
        axios
            .get('./json/dataProducts.json')
            .then((res) => {
                let json = res.data;
                console.log(json);
                json.forEach(el => {
                    if(el.name){
                        const
                        $productCard = d.createElement('div'),
                        $productImg = d.createElement('img'),
                        $productName = d.createElement('h2'),
                        $productPrice = d.createElement('h3'),
                        $productAdress = d.createElement('h3'),
                        $boughtButton = d.createElement('button'),
                        $outOfStockButton = d.createElement('button');

                    $productImg.setAttribute('src', `${el.src}`);
                    $productName.textContent = `🔘${el.name} Size: ${el.size}`;
                    $productPrice.textContent = `💲${el.price}`;
                    if (el.sadress) {
                        $productAdress.textContent = `📍${el.adress} ${el.sadress}`;
                    } else {
                        $productAdress.textContent = `📍${el.adress}`;
                    }
                    $boughtButton.textContent = 'Bought';
                    $outOfStockButton.textContent = 'Out of Stock';

                    $productCard.appendChild($productImg);
                    $productCard.appendChild($productName);
                    $productCard.appendChild($productPrice);
                    $productCard.appendChild($productAdress);
                    $productCard.appendChild($boughtButton);
                    $productCard.appendChild($outOfStockButton);

                    $fragment.appendChild($productCard);
                    }

                });
                $pendingOrder.appendChild($fragment);
            });
    });
}

makingProduct();