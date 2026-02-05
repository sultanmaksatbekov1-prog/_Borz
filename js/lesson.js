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

