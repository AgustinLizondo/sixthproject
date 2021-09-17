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
                json.forEach(el => {
                    const
                        $productCard = d.createElement('div'),
                        $productImg = d.createElement('img'),
                        $productName = d.createElement('h2'),
                        $productPrice = d.createElement('h3'),
                        $productBought = d.createElement('h2'),
                        $productAdress = d.createElement('h3'),
                        $boughtButton = d.createElement('button'),
                        $outOfStockButton = d.createElement('button');
                    if (el.name) {
                        $productBought.setAttribute('class', 'boughtHidden');
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

                        $productCard.appendChild($productBought);
                        $productCard.appendChild($productImg);
                        $productCard.appendChild($productName);
                        $productCard.appendChild($productPrice);
                        $productCard.appendChild($productAdress);
                        $productCard.appendChild($boughtButton);
                        $productCard.appendChild($outOfStockButton);

                        $fragment.appendChild($productCard);
                        $productCard.addEventListener('click', (evt) => {
                            if (evt.target.textContent === 'Bought') {
                                $productCard.replaceChild($productBought, $productImg);
                                $productBought.classList.toggle('boughtHidden');
                                $productBought.classList.remove('outOfStockAlert');
                                $productBought.classList.add('boughtAlert');
                                $productBought.textContent = 'Bought';
                                $productCard.removeChild($outOfStockButton);
                                $productCard.removeChild($boughtButton); 
                            } else if (evt.target.textContent === 'Out of Stock') {
                                $productCard.replaceChild($productBought, $productImg);
                                $productBought.classList.toggle('boughtHidden');
                                $productBought.classList.remove('boughtAlert');
                                $productBought.classList.add('outOfStockAlert');
                                $productBought.textContent = 'Out of Stock';
                                $productCard.removeChild($outOfStockButton);
                                $productCard.removeChild($boughtButton);
                            }
                        })
                    }
                });
                $pendingOrder.appendChild($fragment);
            });
    });
}

makingProduct();

// $fragment.childNodes
// d.addEventListener('click', (evt) => {
//     if (evt.target.tagName === 'BUTTON') {
//         if (evt.target.textContent === 'Bought') {
//             $productCard.firstElementChild.classList.toggle('boughtHidden');
//             $productCard.firstElementChild.classList.remove('outOfStockAlert');
//             $productCard.firstElementChild.classList.add('boughtAlert');
//             $productBought.textContent = 'Bought';

//         } else if (evt.target.textContent === 'Out of Stock') {
//             $productCard.firstElementChild.classList.toggle('boughtHidden');
//             $productCard.firstElementChild.classList.remove('boughtAlert');
//             $productCard.firstElementChild.classList.add('outOfStockAlert');
//             $productBought.textContent = 'Out of Stock';

//         }
//     }
// });