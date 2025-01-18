// An alert to tell about this page
// alert(`On this page:
// - You can click or type in the quantity of each dish to get the total cost.
// - If you order more than 10 for each dish, the input will have red border and background.
// - The total cost will be calculated automatically (in real time) when the quantity and tip increase or decrease.

// JUST INCASE:
// - If you enter a negative number, the total cost will show the cost in negative but will put negative sign in front of dollar sign.

// Later:
// - A comfirmation page will be created soon in the future.

// Thank you!
// `);

// get all the HTML elements that are needed
var dishPrices = document.querySelectorAll(".dish_price span");
var dishPrice = [];
var taxCost = document.getElementById("tax_cost");
var totalCost = document.getElementById("total_cost");
var tip = document.getElementById("tippercent");

// Pass the dish price into an array for later use
Array.from(dishPrices).forEach(function (price) {
  dishPrice.push(price.innerHTML);
});

// stores the price of each dish
var subtotalCost = {
  douhua: 0,
  youtiao: 0,
  steamedFish: 0,
  greenBeans: 0,
  beefRamen: 0,
  eggFriedRice: 0,
  steamedDumplings: 0,
  centuryEgg: 0,
};

// function to calculate the tip that is selected
tip.addEventListener("change", tipTaxCalculation);
function tipTaxCalculation(value) {
  var tipEl = document.getElementById("tip_total");
  var subtotal = Object.values(subtotalCost)
    .reduce((a, b) => a + b)
    .toFixed(2);
  value = Number(tip.value);
  tipCost = ((subtotal * value) / 100).toFixed(2);
  if (tipCost < 0) {
    tipEl.innerHTML = `-$${Math.abs(tipCost).toFixed(2)}`;
  } else {
    tipEl.innerHTML = `$${tipCost}`;
  }
  var tax = (Object.values(subtotalCost).reduce((a, b) => a + b) * 0.11).toFixed(2);
  if (tax < 0) {
    taxCost.innerHTML = `-$${Math.abs(tax).toFixed(2)}`;
  } else {
    taxCost.innerHTML = `$${tax}`;
  }
  if ((Number(subtotal) + Number(tax) + Number(tipCost)).toFixed(2) < 0) {
    totalCost.innerHTML = `-$${Math.abs(
      (Number(subtotal) + Number(tax) + Number(tipCost)).toFixed(2)
    )}`;
  } else {
    totalCost.innerHTML = `$${(Number(subtotal) + Number(tax) + Number(tipCost)).toFixed(2)}`;
  }
}

// function to calculate the total cost of entire order
function orderTotal() {
  var subtotalEl = document.getElementById("subtotal");
  var subtotal = Object.values(subtotalCost)
    .reduce((a, b) => a + b)
    .toFixed(2);
  if (subtotal < 0) {
    subtotalEl.innerHTML = `-$${Math.abs(subtotal).toFixed(2)}`;
  } else {
    subtotalEl.innerHTML = `$${subtotal}`;
  }
  tipTaxCalculation();
}

// Douhua Total Cost
var douhuaQuantity = document.getElementById("douhua_order_quantity");
douhuaQuantity.addEventListener("change", douhuaTotal);

function douhuaTotal(value) {
  value = Number(douhuaQuantity.value);
  douhuaTotalCost = Math.round(value * Number(dishPrice[0]) * 100) / 100;
  if (douhuaTotalCost < 0) {
    document.getElementById("douhua_total").innerHTML = `-$${Math.abs(douhuaTotalCost).toFixed(2)}`;
  } else {
    document.getElementById("douhua_total").innerHTML = `$${douhuaTotalCost.toFixed(2)}`;
  }
  subtotalCost.douhua = douhuaTotalCost;
  orderTotal();
}

// Youtiao Total Cost
var youtiaoQuantity = document.getElementById("youtiao_order_quantity");
youtiaoQuantity.addEventListener("change", youtiaoTotal);

function youtiaoTotal(value) {
  value = Number(youtiaoQuantity.value);
  youtiaoTotalCost = Math.round(value * Number(dishPrice[1]) * 100) / 100;
  if (youtiaoTotalCost < 0) {
    document.getElementById("youtiao_total").innerHTML = `-$${Math.abs(youtiaoTotalCost).toFixed(
      2
    )}`;
  } else {
    document.getElementById("youtiao_total").innerHTML = `$${youtiaoTotalCost.toFixed(2)}`;
  }
  subtotalCost.youtiao = youtiaoTotalCost;
  orderTotal();
}

// Steamed Fish Total Cost
var steamedFishQuantity = document.getElementById("steamed_fish_order_quantity");

steamedFishQuantity.addEventListener("change", steamedFishTotal);

function steamedFishTotal(value) {
  value = Number(steamedFishQuantity.value);
  steamedFishTotalCost = Math.round(value * Number(dishPrice[2]) * 100) / 100;
  if (steamedFishTotalCost < 0) {
    document.getElementById("steamed_fish_total").innerHTML = `-$${Math.abs(
      steamedFishTotalCost
    ).toFixed(2)}`;
  } else {
    document.getElementById("steamed_fish_total").innerHTML = `$${steamedFishTotalCost.toFixed(2)}`;
  }
  subtotalCost.steamedFish = steamedFishTotalCost;
  orderTotal();
}

// Green Beans Total Cost
var greenBeansQuantity = document.getElementById("green_beans_order_quantity");
greenBeansQuantity.addEventListener("change", greenBeansTotal);

function greenBeansTotal(value) {
  value = Number(greenBeansQuantity.value);
  greenBeansTotalCost = Math.round(value * Number(dishPrice[3]) * 100) / 100;
  if (greenBeansTotalCost < 0) {
    document.getElementById("green_beans_total").innerHTML = `-$${Math.abs(
      greenBeansTotalCost
    ).toFixed(2)}`;
  } else {
    document.getElementById("green_beans_total").innerHTML = `$${greenBeansTotalCost.toFixed(2)}`;
  }
  subtotalCost.greenBeans = greenBeansTotalCost;
  orderTotal();
}

// Beef Ramen Total Cost
var beefRamenQuantity = document.getElementById("beef_ramen_order_quantity");
beefRamenQuantity.addEventListener("change", beefRamenTotal);

function beefRamenTotal(value) {
  value = Number(beefRamenQuantity.value);
  beefRamenTotalCost = Math.round(value * Number(dishPrice[4] * 100)) / 100;
  if (beefRamenTotalCost < 0) {
    document.getElementById("beef_ramen_total").innerHTML = `-$${Math.abs(
      beefRamenTotalCost
    ).toFixed(2)}`;
  } else {
    document.getElementById("beef_ramen_total").innerHTML = `$${beefRamenTotalCost.toFixed(2)}`;
  }
  subtotalCost.beefRamen = beefRamenTotalCost;
  orderTotal();
}

// Egg Fried Rice Total Cost
var eggFriedRiceQuantity = document.getElementById("egg_fried_rice_order_quantity");
eggFriedRiceQuantity.addEventListener("change", eggFriedRiceTotal);

function eggFriedRiceTotal(value) {
  value = Number(eggFriedRiceQuantity.value);
  eggFriedRiceTotalCost = Math.round(value * Number(dishPrice[5]) * 100) / 100;
  if (eggFriedRiceTotalCost < 0) {
    document.getElementById("egg_fried_rice_total").innerHTML = `-$${Math.abs(
      eggFriedRiceTotalCost
    ).toFixed(2)}`;
  } else {
    document.getElementById("egg_fried_rice_total").innerHTML = `$${eggFriedRiceTotalCost.toFixed(
      2
    )}`;
  }
  subtotalCost.eggFriedRice = eggFriedRiceTotalCost;
  orderTotal();
}

// Steamed Dumplings Total Cost
var steamedDumplingsQuantity = document.getElementById("steamed_dumplings_order_quantity");
steamedDumplingsQuantity.addEventListener("change", steamedDumplingsTotal);

function steamedDumplingsTotal(value) {
  value = Number(steamedDumplingsQuantity.value);
  steamedDumplingsTotalCost = Math.round(value * Number(dishPrice[6]) * 100) / 100;
  if (steamedDumplingsTotalCost < 0) {
    document.getElementById("steamed_dumplings_total").innerHTML = `-$${Math.abs(
      steamedDumplingsTotalCost
    ).toFixed(2)}`;
  } else {
    document.getElementById(
      "steamed_dumplings_total"
    ).innerHTML = `$${steamedDumplingsTotalCost.toFixed(2)}`;
  }
  subtotalCost.steamedDumplings = steamedDumplingsTotalCost;
  orderTotal();
}

// Century Egg Total Cost
var centuryEggQuantity = document.getElementById("century_egg_order_quantity");
centuryEggQuantity.addEventListener("change", centuryEggTotal);

function centuryEggTotal(value) {
  value = Number(centuryEggQuantity.value);
  centuryEggTotalCost = Math.round(value * Number(dishPrice[7]) * 100) / 100;
  if (centuryEggTotalCost < 0) {
    document.getElementById("century_egg_total").innerHTML = `-$${Math.abs(
      centuryEggTotalCost
    ).toFixed(2)}`;
  } else {
    document.getElementById("century_egg_total").innerHTML = `$${centuryEggTotalCost.toFixed(2)}`;
  }
  subtotalCost.centuryEgg = centuryEggTotalCost;
  orderTotal();
}
