const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const saveBtn = document.getElementById("save-btn");

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
saveBtn.addEventListener("click", save);

function increment() {
  count += 1;
  countEl.textContent = count;
}

function decrement() {
  count -= 1;
  countEl.textContent = Math.max(0, count);

  // 👇 to make sure, count doesn't go below 0.
  if (count < 0) {
    count = 0;
  }
}

function save() {
  let countStr = " " + count + " - ";

  // 👇 to make sure count of "0" is added to the previous entries
  if (count > 0) {
    saveEl.textContent += countStr;
  }

  countEl.textContent = 0;

  count = 0;
}
