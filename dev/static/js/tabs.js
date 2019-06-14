
class TabList {
  constructor(buttonsContainer, tabs) {
    this.buttonsContainer = buttonsContainer;
    this.tabs = tabs;

    this.buttonsContainer.addEventListener('click', event => {
      const index = event.target.closest('.tab__link').dataset.value;
      this.openTab(index);
      event.target.closest('.tab__link').classList.add('active');
    });
  }

  openTab(index) {
    this.buttonsContainer.querySelector('.active').classList.remove('active');
    this.tabs.querySelector('.active').classList.remove('active');
    this.tabs.querySelector(`.tab__content-${index}`).classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  const buttonsContainer = document.querySelector('.tab__links');
  const tabs             = document.querySelector('.tabs__content');

  const tabList = new TabList(buttonsContainer, tabs);
})

export default TabList;
