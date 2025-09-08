let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

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

  saveEl.textContent += countStr;
  countEl.textContent = 0;

  count = 0;
}
