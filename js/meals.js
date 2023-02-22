let serial = 0;

// first card operation
document.getElementById("first-card").addEventListener("click", function () {
  serial += 1;

  //  getting data using common function using getElementById method
  const pd = getData("first-name", "first-price", "first-quantity");
  //   multiply logic
  const priceTotal = parseInt(pd.productPrice) * parseInt(pd.productQuantity);
  //   show the data using function
  displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);
  //   disabled button using function
  disabledButton("first-card");
});

// using event object from browser
// second card operation

document.getElementById("second-card").addEventListener("click", function () {
    serial += 1;
    
    const pd = getData("second-name", "second-price", "second-quantity");
    
    const priceTotal = parseInt(pd.productPrice) * parseInt(pd.productQuantity);
    
    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);
    
    disabledButton("second-card");
  });

// third card operation

document.getElementById("third-card").addEventListener("click", function () {
    serial += 1;
  
    const pd = getData("third-name", "third-price", "third-quantity");

    const priceTotal = parseInt(pd.productPrice) * parseInt(pd.productQuantity);
    
    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);
    
    disabledButton("third-card");
  });

// card four oepration

document.getElementById("fourth-card").addEventListener("click", function () {
    serial += 1;
   
    const pd = getData("fourth-name", "fourth-price", "fourth-quantity");
    
    const priceTotal = parseInt(pd.productPrice) * parseInt(pd.productQuantity);
    
    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);
    
    disabledButton("fourth-card");
  });
 
 //fifth card
 
 document.getElementById("fifth-card").addEventListener("click", function () {
    serial += 1;
    
    const pd = getData("fifth-name", "fifth-price", "fifth-quantity");
    
    const priceTotal = parseInt(pd.productPrice) * parseInt(pd.productQuantity);
    
    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);
    
    disabledButton("fifth-card");
  });

// last card

document.getElementById("last-card").addEventListener("click", function () {
    serial += 1;
    
    const pd = getData("last-name", "last-price", "last-quantity");
    
    const priceTotal = parseInt(pd.productPrice) * parseInt(pd.productQuantity);
    
    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);
    
    disabledButton("last-card");
  });

// common function to display data
function displayData(nameOfP, priceOfP, quantityOfp, resultP) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfp}</td>
    <td>${resultP}</td>
    
    `;

  container.appendChild(tr);
  document.getElementById("total-product").innerText = serial;
}

// common function to disable button
function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}

// common function to get data using event object
function getAllData(e) {
  const pName = e.target.parentNode.parentNode.children[0].innerText;
  const pPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const pQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;
  //   console.log(pName, pPrice, pQuantity);

  const pd = {
    pName: pName,
    pPrice: pPrice,
    pQuantity: pQuantity,
  };

  return pd;
}

// common function to get data using getElementById method
function getData(id1, id2, id3) {
  // get the data from htm using id
  const productName = document.getElementById(id1).innerText;
  const productPrice = document.getElementById(id2).innerText;
  const productQuantity = document.getElementById(id3).innerText;

  const pd = {
    productName: productName,
    productPrice: productPrice,
    productQuantity: productQuantity,
  };
  return pd;
}
