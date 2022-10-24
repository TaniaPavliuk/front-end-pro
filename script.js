const products = [
  {
    productName: 'bread',
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: '21/10/2022',
      sugarFree: true,
    },
    productProvider: 'FOP Skyba R.R.',
    productCountry: 'https://www.worldometers.info/img/flags/ar-flag.gif',
    productPrice: 9.75,
  },
  {
    productName: 'butter',
    productData: {
      weight: 100,
      certificate: false,
      date0fExpiry: '21/10/2022',
      sugarFree: false,
    },
    productProvider: 'FOP UK Milk',
    productCountry: 'https://www.worldometers.info/img/flags/af-flag.gif',
    productPrice: 11.7,
  },
  {
    productName: 'mango',
    productData: {
      weight: 400,
      certificate: false,
      date0fExpiry: '30/12/2022',
      sugarFree: true,
    },
    productProvider: 'FOP Fruits&Goods',
    productCountry: 'https://www.worldometers.info/img/flags/au-flag.gif',
    productPrice: 50.6,
  },
  {
    productName: 'banana',
    productData: {
      weight: 1000,
      certificate: false,
      date0fExpiry: '17/11/2022',
      sugarFree: false,
    },
    productProvider: 'FOP Eco Family',
    productCountry:
      'https://www.worldometers.info/img/flags/small/tn_bb-flag.gif',
    productPrice: 27.9,
  },
  {
    productName: 'oranges',
    productData: {
      weight: 300,
      certificate: true,
      date0fExpiry: '01/02/2023',
      sugarFree: true,
    },
    productProvider: 'FOP Eco Farm',
    productCountry: 'https://www.worldometers.info/img/flags/sp-flag.gif',
    productPrice: 10.2,
  },
  {
    productName: 'onion',
    productData: {
      weight: 260,
      certificate: true,
      date0fExpiry: '23/01/2023',
      sugarFree: false,
    },
    productProvider: 'FOP Vegan',
    productCountry:
      'https://www.worldometers.info/img/flags/small/tn_co-flag.gif',
    productPrice: 10.15,
  },
  {
    productName: 'potato',
    productData: {
      weight: 10,
      certificate: false,
      date0fExpiry: '21/10/2022',
      sugarFree: false,
    },
    productProvider: 'FOP LukashenkoSuka',
    productCountry: 'https://www.worldometers.info/img/flags/bo-flag.gif',
    productPrice: 0.01,
  },
  {
    productName: 'wheat',
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: '22/10/2023',
      sugarFree: true,
    },
    productProvider: 'FOP SystemProd',
    productCountry: 'https://www.worldometers.info/img/flags/up-flag.gif',
    productPrice: 16.25,
  },
  {
    productName: 'beef',
    productData: {
      weight: 700,
      certificate: true,
      date0fExpiry: '27/10/2022',
      sugarFree: false,
    },
    productProvider: 'FOP Meat Factory',
    productCountry:
      'https://www.worldometers.info/img/flags/small/tn_gm-flag.gif',
    productPrice: 100.75,
  },
  {
    productName: 'beer',
    productData: {
      weight: 1000,
      certificate: true,
      date0fExpiry: '21/10/2022',
      sugarFree: false,
    },
    productProvider: 'FOP Budweiser',
    productCountry: 'https://www.worldometers.info/img/flags/ez-flag.gif',
    productPrice: 12.0,
  },
  {
    productName: 'olives',
    productData: {
      weight: 50,
      certificate: true,
      date0fExpiry: '21/10/2022',
      sugarFree: false,
    },
    productProvider: 'FOP Greko',
    productCountry: 'https://www.worldometers.info/img/flags/gr-flag.gif',
    productPrice: 13.75,
  },
  {
    productName: 'salmon',
    productData: {
      weight: 900,
      certificate: true,
      date0fExpiry: '27/11/2022',
      sugarFree: false,
    },
    productProvider: 'FOP Old and Sea',
    productCountry:
      'https://www.worldometers.info/img/flags/small/tn_sp-flag.gif',
    productPrice: 20.85,
  },
  {
    productName: 'salt',
    productData: {
      weight: 10000,
      certificate: false,
      date0fExpiry: '21/10/2022',
      sugarFree: false,
    },
    productProvider: 'FOP Escobar',
    productCountry: 'https://www.worldometers.info/img/flags/co-flag.gif',
    productPrice: 200.65,
  },
  {
    productName: 'eggs',
    productData: {
      weight: 300,
      certificate: true,
      date0fExpiry: '01/01/2023',
      sugarFree: true,
    },
    productProvider: 'FOP Eggs Market',
    productCountry:
      'https://www.worldometers.info/img/flags/small/tn_up-flag.gif',
    productPrice: 70.75,
  },
  {
    productName: 'gorilka',
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: '21/10/2022',
      sugarFree: false,
    },
    productProvider: 'FOP Finlandia',
    productCountry: 'https://www.worldometers.info/img/flags/fi-flag.gif',
    productPrice: 150.5,
  },
];

const rootElement = document.getElementById('root');
const listElement = document.createElement('ul');

listElement.classList.add('products-list');

function renderProduct(product) {
  const listItemElement = document.createElement('li');
  const productDescriptionElement = document.createElement('p');
  const productCountryElement = document.createElement('img');

  listItemElement.classList.add('list-item');
  if (!product.productData.certificate) {
    listItemElement.classList.add('uncertified');
  }
  productDescriptionElement.innerText = `${product.productName} - ${
    product.productData.weight
  }kg, Expiration ${product.productData.date0fExpiry}, Provider "${
    product.productProvider
  }", Price ${product.productPrice} UAH${
    product.productData.sugarFree ? ', Sugar free' : ''
  } `;
  productCountryElement.src = product.productCountry;

  listItemElement.appendChild(productDescriptionElement);
  listItemElement.appendChild(productCountryElement);

  listElement.appendChild(listItemElement);
}

products.forEach(renderProduct);

rootElement.appendChild(listElement);

function calculateTotal(currentSum, product) {
  return currentSum + product.productPrice;
}

const total = products.reduce(calculateTotal, 0);

function calculateMax(currentMax, product) {
  if (currentMax.productPrice > product.productPrice) {
    return currentMax;
  }
  return product;
}

const mostExpenciveProduct = products.reduce(calculateMax);

const averagePrice = total / products.length;

const totalElement = document.createElement('p');
const mostExpensiveProductElement = document.createElement('p');
const averagePriceElement = document.createElement('p');

totalElement.innerText = `Final price: ${total.toFixed(2)} UAH`;

mostExpensiveProductElement.innerText = `Most expensive product: ${
  mostExpenciveProduct.productName
} - ${mostExpenciveProduct.productData.weight}kg, Expiration ${
  mostExpenciveProduct.productData.date0fExpiry
}, Provider "${mostExpenciveProduct.productProvider}", Price ${
  mostExpenciveProduct.productPrice
} UAH${mostExpenciveProduct.productData.sugarFree ? ', Sugar free' : ''} `;

averagePriceElement.innerText = `Average price: ${averagePrice.toFixed(2)} UAH`;

rootElement.appendChild(totalElement);
rootElement.appendChild(mostExpensiveProductElement);
rootElement.appendChild(averagePriceElement);
