// navbar variable start

const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menuItems = document.getElementById("menu-items");
const selectedSeatContainer = document.getElementById("booking-seat-container");
const totalSelectedSeat = document.getElementById("total-seat-selected");
const totalPrice = document.getElementById("Total-price");
const availableSeat = parseFloat(
  document.getElementById("available-seat").innerText
);
const applyBtn = document.getElementById("apply-btn");
const inputCoupon = document.getElementById("input-coupon");
const grandPrice = document.getElementById("grand-Total-price");
const coupon = document.getElementById("new15-coupon");
const coupon2 = document.getElementById("coupon-couple");
console.log(coupon2.innerText);

// navbar variable end

// navbar section function

function clickMenu() {
  menuOpen.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
  menuItems.classList.toggle("hidden");
}

let selectedSeatArray = [];
let totalSeatPrice = 0;
function seatBook(event) {
  document.getElementById("no-select").classList.add("hidden");
  const value = event.innerText;
  if (selectedSeatArray.includes(value)) {
    event.classList.remove("hover:bg-black");
    return alert("seat already booked");
  } else if (selectedSeatArray.length <= 3) {
    selectedSeatContainer.innerHTML += `
    <li class="flex justify-between items-center text-base font-semibold list-none">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>`;
    selectedSeatArray.push(event.innerText);
    totalSelectedSeat.innerText = selectedSeatArray.length;
    event.classList.add("bg-primary", "text-white");
    event.classList.add("hover:bg-primary");
    totalSeatPrice += 550;
    totalPrice.innerText = totalSeatPrice;
    let available = availableSeat - selectedSeatArray.length;
    document.getElementById("available-seat").innerText = available;
    if (selectedSeatArray.length === 4) {
      applyBtn.removeAttribute("disabled");
      inputCoupon.removeAttribute("disabled");
    }
  } else {
    return alert("maximum seat booked");
  }
}
function couponApply() {
  if (inputCoupon.value === coupon.innerText) {
    const couponChar = totalSeatPrice - totalSeatPrice * 0.15;
    return (grandPrice.innerText = couponChar);
  } else if (inputCoupon.value === coupon2.innerText) {
    const couponChar = totalSeatPrice - totalSeatPrice * 0.15;
    return (grandPrice.innerText = couponChar);
  } else {
    return alert("wrong coupon code");
  }
}
