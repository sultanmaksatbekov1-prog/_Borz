//TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabContentItems = document.querySelectorAll(".tab_content_item");
const tabContentItemsParent = document.querySelector(".tab_content_items");

const hide = () => {
  tabContentBlocks.forEach((block) => {
    block.style.display = "none";
  });
  tabContentItems.forEach((button) => {
    button.classList.remove("tab_content_item_active");
  });
};
tabContentItems.forEach((button) => {
  button.classList.remove("tab_content_item_active");
});

const show = (i = 0) => {
  tabContentBlocks[i].style.display = "block";
  tabContentItems[i].classList.add("tab_content_item_active");
};
hide();
show();
tabContentItemsParent.onclick = (event) => {
  if (event.target.tagName.toLowerCase() === "button") {
    tabContentItems.forEach((button, index) => {
      if (button === event.target) {
        hide();
        show(index);
       
      }
    });
  }
  clearInterval(interval)
};
let tabIndex = 0
const autoSlider = () => {
    tabIndex++
    if (tabIndex > tabContentItems.length - 1) {
      tabIndex = 0;
    }
    hide();
    show(tabIndex);
};
autoSlider()
const interval = setInterval(autoSlider,1000)


// CONVERTER

const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")
const eurInput = document.querySelector("#eur")

const converter = (element, target1, target2) => {
  element.oninput = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', '../data/converter.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()

    xhr.onload = () => {
      const data = JSON.parse(xhr.response)
      if (element.id === 'som') {
        target1.value = (element.value / data.usd).toFixed(2)
        target2.value = (element.value / data.eur).toFixed(2)
      }
      if (element.id === 'usd') {
        target1.value = (element.value * data.usd).toFixed(2)
        target2.value = ((element.value * data.usd) / data.eur).toFixed(2)
      }
      if (element.id === 'eur') {
        target1.value = (element.value * data.eur).toFixed(2)
        target2.value = ((element.value * data.eur) / data.usd).toFixed(2)
      }
      if (element.value === "") {
        target1.value = ""
        target2.value = ""
      }
    }

  }
}

converter(somInput, usdInput, eurInput)
converter(usdInput, somInput, eurInput)
converter(eurInput, somInput, usdInput)


// CARD SWITCHER

const btn = document.querySelector(".card")
const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")
let cardId = 0
const card = document.querySelector(".card")

const functionSwitcher = () => {

  fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
    .then (response => response.json())
    .then (data => {
      console.log(data
        
      );
      
      const {title, id, completed} = data
      const completedTitle = completed ? 'yes' : 'no'
      const completedColor = completed ? 'green' : 'red'
      card.innerHTML = `
        <p>${title}</p>
        <p style="color: ${completedColor}">
          ${completedTitle}
        </p>
        <span>${id}</span>
      `
    })
}

// btnContaine.onclick = (event) => {
//   if (event.target.tagName === "button") {
//     if ("button".id === "btnNext")
//   }
// }