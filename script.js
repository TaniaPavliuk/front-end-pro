const validateValue = (value) => {
    if (value === undefined || value === null) {
      return;
    }
    return value;
  };
  const emptyValue = "This value is not correct";
  
  //1 
  const sampleArray = [];
  
  for (let i = 1; i < 2; i++) {
    const lengthOfArray = +prompt(
      "Enter the number from 1 to 10 to define a length of array"
    );
    if (isNaN(lengthOfArray) || lengthOfArray > 10) {
      i--;
    } else {
      for (let i = 1; i <= lengthOfArray; i++) {
        const userValue = +prompt(`Enter a numeric value №${i}`);
        if (!isNaN(userValue)) {
          sampleArray.push(userValue);
        } else {
          i--;
        }
      }
    }
  }
  
  console.log(sampleArray);
  const sortedSampleArray = sampleArray.sort((a, b) => a - b);
  
  console.log(sortedSampleArray);
  
  //3
  
  const productsList = [
    { productName: "bread", productPrice: 14.5, productQuantity: 2 },
    { productName: "watermalon", productPrice: 53.5, productQuantity: 2 },
    { productName: "potatoes", productPrice: 70.3, productQuantity: 4 },
    { productName: "onion", productPrice: 10.6, productQuantity: 3 },
    { productName: "peach", productPrice: 120.2, productQuantity: 7 },
    { productName: "olives", productPrice: 61.4, productQuantity: 5 },
  ];
  
  // 3.1 
  const totalProductPrice = productsList.reduce(
    (sum, price) => sum + price.productPrice * price.productQuantity,
    0
  );
  console.log(`Total check: ${totalProductPrice}`);
  
  // 3.2
  const minQuantity = productsList.sort(
    (el1, el2) => el1.productQuantity - el2.productQuantity
  )[0];
  console.log(
    `The least of all ${minQuantity.productName}: ${minQuantity.productQuantity} items`
  );
  
  // 3.3 
  const totalProductQuantity = productsList.reduce(
    (sum, quantity) => sum + quantity.productQuantity,
    0
  );
  console.log(`Total quantity: ${totalProductQuantity}`);
  
  // 3.4 
  const mostExpensiveProduct = productsList.sort(
    (el1, el2) => el2.productPrice - el1.productPrice
  )[0];
  console.log(
    `The most expensive product is: ${mostExpensiveProduct.productName}, it costs ${mostExpensiveProduct.productPrice}`
  );
  
  // 3.5 
  const newOneProduct = () => {
    const newProduct = {
      productName: "",
      productPrice: 0,
      productQuantity: 0,
    };
      
    for (let key in newProduct) {
      const value = prompt(key);
  
      if (!validateValue(value) && key === "productName") {
        newProuct[key] = emptyValue;
      } else if (key === "productPrice" || key === "productQuantity") {
        newProduct[key] = Math.abs(value) ? Math.abs(value) : 0;
      } else {
        newProduct[key] = value;
      }
    }
    productsList.push(newProduct);
    return productsList;
  };
  newOneProduct();
  console.log(productsList);
  
  // 3.6 
  const deleteProduct = () => {
    const productValue = prompt("Enter the name of product which you want to delete");
    if (validateValue(productValue)) {
      const indexOfElement = productsList.findIndex(
        (el) => el.productName === productValue
      );
      if (indexOfElement === -1) return "Wrong name! There are no such products.";
      productsList.splice(indexOfElement, 1);
      return productsList;
    } else return "Ok";
  };
  
  deleteProduct();
  
  //4
  const arrayNumbers = [
    16, -3, 54, -4, -72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4,
    -54, 76, -4, 12, 6, -35,
  ];
  
  // 4.1
  const positiveArrayNumbers = arrayNumbers.filter((number) => number >= 0);
  const totalAmount = positiveArrayNumbers.reduce((sum, number) => sum + number);
  console.log(`The sum is ${positiveArrayNumbers.length} the amount of elements is ${totalAmount}`);
  
  //4.2
  const minElementValue = Math.min(...arrayNumbers);
  const indexMinElement = arrayNumbers.findIndex(
    (element) => element === minElementValue
  );
  console.log(
    `The minimal elemetn is ${minElementValue}, the number of element is ${indexMinElement}`
  );
  
  //4.3
  const maxElementValue = Math.max(...arrayNumbers);
  const indexMaxElement = arrayNumbers.findIndex(
    (element) => element === maxElementValue
  );
  console.log(
    `The maximal element is ${maxElementValue}, the number of element is ${indexMaxElement}`
  );
  
  //4.4 
  const negativeArrayNumbers = arrayNumbers.filter((number) => number < 0);
  console.log(`The quantity of negative numbers is ${negativeArrayNumbers.length}`);
  
  //4.5
  const notEvenArrayNumbers = positiveArrayNumbers.filter(
    (number) => number % 2 !== 0
  );
  console.log(`The quantity of not even numbers is ${notEvenArrayNumbers.length}`);
  
  //4.6
  const evenArrayNumbers = positiveArrayNumbers.filter(
    (number) => number % 2 === 0
  );
  const totalAmountOfEvenNumbers = evenArrayNumbers.reduce(
    (sum, number) => sum + number
  );
  console.log(`Sum of even elements: ${totalAmountOfEvenNumbers}`);
  
  //4.7
  const multiplyEvenNumbers = positiveArrayNumbers.reduce(
    (number1, number2) => number1 * number2,
    1
  );
  console.log(`The multiply of positive elements is ${multiplyEvenNumbers}`);