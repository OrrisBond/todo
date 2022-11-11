let textin = document.querySelector("input");
let btadd = document.querySelector(".abt");
let container = document.querySelector(".added");
let items = document.querySelector(".todo");
let empty = document.querySelector(".empty");
let remove = document.querySelector(".dbt");

let store = [];
empty.style = "display:block";

btadd.addEventListener("click", () => {
  if (textin.value == "") {
    return;
  } else {
    store.push(textin.value);
    textin.value = "";
    display();
  }
});

function display() {
  container.innerHTML = "";
  for (let i = 0; i < store.length; i++) {
    container.innerHTML += `<div class="todo" id='${i}'>
    <p class="list">${store[i]}</p>
    <button onclick='removeItem(this)' class="dbt"><i class="bi bi-trash"></i></button>
  </div>`;
  }
}

function removeItem(e) {
  store.splice(e.parentElement.id, 1);
  if (store.length < 1) {
    container.innerHTML = `<div class="nothing">
    <p class="empty">No items Present Add a new to do</p>
  </div>`;
  } else {
    display();
  }
}
