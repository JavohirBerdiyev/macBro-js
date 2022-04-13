let listBtn = document.querySelector("#btnsRam");
let listMemory = document.querySelector("#btnsMemory");
let price = document.querySelector("#price");
let add = document.querySelector(".add");
price.innerHTML = 0;

function priceTotal(obj) {
  obj.ram.forEach((el) => {
    if (el.active) {
      el.memory.forEach((element) => {
        if (element.active) {
          price.innerHTML = element.price;
          total = element.price;
        }
      });
    }
  });
}
priceTotal(macObj);

function addBtnRam(macObj) {
  listBtn.innerHTML = "";
  listMemory.innerHTML = "";
  macObj.ram.forEach((element) => {
    let btn = document.createElement("button");
    btn.className = "btnn";
    if (element.active) {
      btn.classList.add("active-btn");

      element.memory.forEach((item) => {
        let btn = document.createElement("button");
        btn.className = "btnn";

        if (item.active) {
          btn.classList.add("active-btn");
        }
        btn.innerHTML = `${item.size}GB`;
        listMemory.appendChild(btn);
      });
    }

    btn.innerHTML = `${element.ramSize}GB`;
    listBtn.appendChild(btn);
  });
}
addBtnRam(macObj);

listBtn.addEventListener("click", (e) => {
  total = 0;
  macObj.ram.forEach((element) => {
    element.active = false;
    if (
      element.ramSize ==
      e.target.innerHTML.slice(0, e.target.innerHTML.length - 2)
    ) {
      element.active = true;
    }
  });
  isAcitve(macObj);
  priceTotal(macObj);
  addBtnRam(macObj);
});

function isAcitve(macObj) {
  total = 0;
  listMemory.addEventListener("click", (e) => {
    macObj.ram.forEach((element) => {
      // element.memory.active = false;
      element.memory.forEach((el) => {
        el.active = false;
        if (
          el.size == e.target.innerHTML.slice(0, e.target.innerHTML.length - 2)
        ) {
          el.active = true;
        }
      });
    });
    priceTotal(macObj);
    addBtnRam(macObj);
  });
}

isAcitve(macObj);
