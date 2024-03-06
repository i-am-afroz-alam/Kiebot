async function getProducts() {
  let response = await fetch("https://fakestoreapi.com/products");
  let productData = await response.json();
  console.log(productData);
  console.log(productData.length);

  const eProducts = [];
  const fProducts = [];
  const jProducts = [];
  for (let index = 0; index < productData.length; index++) {
    console.log(`Product${index}`);
    const element = productData[index];
    console.log(element);
    if (element.category === "electronics") {
      eProducts.push(element);
    }
    if (
      element.category === "women's clothing" ||
      element.category === "men's clothing"
    ) {
      fProducts.push(element);
    }
    if (element.category === "jewelery") {
      jProducts.push(element);
    }
  }
  // console.log("Electronics array");
  // console.log(eProducts);
  console.log("Fashion array");
  console.log(fProducts);

  // console.log("Jewelery Products");
  // console.log(jProducts);

  //for fashion Products
  for (let index = 1; index <= 8; index++) {
    let ProductObj = fProducts[index];
    image = ProductObj.image;
    title = ProductObj.title;
    description = ProductObj.description;
    ratingObj = ProductObj.rating;
    ratingStar = ratingObj.rate;
    price = ProductObj.price;
    console.log(ProductObj.image);

    const div = document.getElementById(`fcard${index}`);
    div.innerHTML = `<img
    src="${image}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">
      ${ratingStar}
    </p>
    <a href="#" class="btn btn-primary">Buy Rs ${price}</a>
  </div>`;
    console.log("Cards");
    console.log(div);
  }

  for (let index = 1; index <= 4; index++) {
    let ProductObjElctronics = eProducts[index];
    image1 = ProductObjElctronics.image;
    title1 = ProductObjElctronics.title;
    ratingObj1 = ProductObjElctronics.rating;
    ratingStar1 = ratingObj.rate;
    price1 = ProductObjElctronics.price;

    console.log(image1);
    console.log(title1);
    console.log(ratingStar1);
    console.log(price1);

    const div1 = document.getElementById(`ecard${index}`);
    console.log("div1");
    console.log(div1);

    div1.innerHTML = `<img
    src="${image1}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${title1}</h5>
    <p class="card-text">
     ${ratingStar1}
    </p>
    <a href="#  " class="btn btn-primary" onclick="onbuy()">Buy Rs ${price1}</a>
  </div>`;
  }

  for (let index = 0; index <= jProducts.length; index++) {
    let ProductObjjewel = jProducts[index];
    image1 = ProductObjjewel.image;
    title1 = ProductObjjewel.title;
    ratingObj1 = ProductObjjewel.rating;
    ratingStar1 = ratingObj.rate;
    price1 = ProductObjjewel.price;

    console.log(image1);
    console.log(title1);
    console.log(ratingStar1);
    console.log(price1);

    const div1 = document.getElementById(`jcard${index + 1}`);
    console.log("div1");
    console.log(div1);

    div1.innerHTML = `<img
    src="${image1}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${title1}</h5>
    <p class="card-text">
     ${ratingStar1}
    </p>
    <a href="#" class="btn btn-primary" >Buy Rs ${price1}</a>
  </div>`;
  }
}

function onbuy() {
  alert("Item added in your bag");
}
getProducts();
// getProducts();
