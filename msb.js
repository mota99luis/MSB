alert("Hola Mi amor, Pasos a seguir, dale click en cada cuadro😊 \n Inicia con que diga 1. Mishel sanchez barrero 😊💕 \n Finaliza con el de Agradecimiento 👍\n Te Amo Mishel Paola Sanchez Barrero 💕💕💕💕💕💕")
const preloadImages = () => {
    const repoUrl = `https://raw.githubusercontent.com/ChinmayMoghe/hostedFiles/master/gogophers/optimized/`;
    const gopherNames = [
  "7TH_BIRTHDAY",
  "APPLE GOPHER",
  "Azure_Bit_Gopher",
  "Azure_Gophers",
  "BATMAN_GOPHER",
  "BELGIUM",
  "Biker_Gopher",
  "BLUE_GLASSES_GOPHER",
  "BLUE_GOPHER",
  "BuffaloCast",
  "COMING_SOON_GOPHER",
  "CouchPotatoGopher",
  "COWBOY_GOPHER",
  "DEATH_METAL_GOPHER",
  "DockerGopher",
  "DOCTOR_STRANGE_GOPHER",
  "Doctor_Who_Gopher",
  "Doctor_Who_Gopher_Woman",
  "DRAWING_GOPHER",
  "Facepalm_Gopher",
  "Facepalm_Picard_Gopher",
  "GIRL_GOPHER",
  "GOOGLE",
  "GOPHER WEBPACK",
  "GOPHERCON",
  "GOPHER_MIC_DROP",
  "GOPHER_PARAKEET",
  "GOPHER_SHARE",
  "LazyGopher",
  "LION_GOPHER",
  "NERDY",
  "RickAndMorty",
  "WonderWomanGopher"
    ];
    const gopherImages = gopherNames.map((gopherName) => {
        let img = new Image();
        img.src = `${repoUrl}${gopherName}.png`;
        img.classList.add('gophers');
        return img;
    });
    return gopherImages;
  };
  
  const loadApp = () => {
    const domItems = {
      gridElement: document.querySelector('.grid-container'),
      gridItems:{
          itemHeader : document.querySelector('.item-header'),
          itemNeedGolang : document.querySelector('.item-needofgolang'),
          itemIntro : document.querySelector('.item-introduction'),
          itemLearning: document.querySelector('.item-learning-resources'),
          itemLocalSetup: document.querySelector('.item-local-setup'),
          itemAttribute: document.querySelector('.item-attribution')
      },
      modal:{
          modalClose:document.querySelector('.modal-close'),
          modalElem: document.querySelector('.modal-background'),
          modalTitle:document.querySelector('.modal-title-text'),
          modalContent:document.querySelector('.modal-content')
      }
    }
    addEventListenerstoItems(domItems);
    const gopherDocFragment = document.createDocumentFragment();
    const imgArr = preloadImages();
    imgArr.map(img=> gopherDocFragment.appendChild(img));
    document.querySelector('.item-gopher-scroll').appendChild(gopherDocFragment);
  };
  
  const setContentforModal = (selector)=>{
    document.querySelector(`.${selector}`).style.display = "block";
  };
  
  const resetContentforModal = (modalContentchild)=>{
    modalContentchild.style.display = "none";
  }
  
  const initModal = (gridItem,domItems)=> {
    domItems.modal.modalTitle.textContent = gridItem.textContent;
    setContentforModal(gridItem.dataset.section);
    domItems.modal.modalElem.classList.toggle("show-modal");
  };
  
  const addEventListenerstoItems = (domItems)=>{
    domItems.gridItems.itemAttribute.addEventListener("click",function() {initModal(this,domItems);});
    domItems.gridItems.itemLocalSetup.addEventListener("click",function() {initModal(this,domItems);});
    domItems.gridItems.itemLearning.addEventListener("click",function() {initModal(this,domItems);});
    domItems.gridItems.itemIntro.addEventListener("click",function() {initModal(this,domItems);});
    domItems.gridItems.itemNeedGolang.addEventListener("click",function() {initModal(this,domItems);});
    domItems.gridItems.itemHeader.addEventListener("click",function() {initModal(this,domItems);});
    domItems.modal.modalClose.addEventListener("click",function(){
        domItems.modal.modalContent.scrollTo(0,0);
        domItems.modal.modalElem.classList.toggle("show-modal");
        [...domItems.modal.modalContent.children].forEach(resetContentforModal);
    });
  }
  
  const initApp = (() => {
    let domResolve;
    let domLoaded = new Promise(function(resolve) {
      domResolve = resolve;
    });
    window.addEventListener("DOMContentLoaded", domResolve);
    domLoaded.then(loadApp);
  })();