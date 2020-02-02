const VAT = 20.6;
let price = prompt("Enter the price:");
let final_price = price * (VAT / 100 + 1);
alert("Price including VAT: " + final_price);
