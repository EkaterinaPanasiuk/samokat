//------popup-----------
let openPopUp=document.querySelectorAll('.popup-open');
let currentPopUp;
let body=document.querySelector('body');
let scrollTop ;



//открытие попапа по кнопке----------------
for(let i=0 ; i < openPopUp.length ; i++){
    let unicOpenPopUp=openPopUp[i];
    unicOpenPopUp.addEventListener('click', function(e){
       let namePopUp=unicOpenPopUp.getAttribute('data');
       currentPopUp=document.getElementById(namePopUp);
       e.preventDefault();
       currentPopUp.classList.add('active');
       body.classList.add('bodyLock');
       scrollTop=window.pageYOffset;
// закрытие при клике по фэйду------------------
    window.addEventListener('click', function(e){
    if(e.target.classList.contains('popup-fade')){
        currentPopUp.classList.remove('active');
        body.classList.remove('bodyLock');
        window.scrollTo(0, scrollTop);
    }
    })
})
}
//клик по кнопке закрыть--------------------------
let closePopup=document.querySelectorAll('.popup-close');
for(let i=0; i<closePopup.length; i++){
    let unicClosePopup=closePopup[i];
    unicClosePopup.addEventListener('click',function(e){
        e.preventDefault();
        currentPopUp=unicClosePopup.closest('.popup-fade');
        currentPopUp.classList.remove('active');
        body.classList.remove('bodyLock');
        window.scrollTo(0, scrollTop);

    })
}

//-------------slider---------------------------------------------------
let slider=document.querySelector('.slider_wrapper');
let sliderLine=document.querySelector('.slider-line');
let cards= document.querySelectorAll('.card');
let leftBtn=document.querySelector('.slider__left');
let rightBtn=document.querySelector('.slider__right');
let count=0;


function init(){
    let width=slider.offsetWidth;
     let sliderLineWidth=width*cards.length;
    sliderLine.style.width=sliderLineWidth +'px';
    cards.forEach( function(item){
        item.style.width=width+'px';
        item.style.height="auto";
        })
// листаем влево---------------------------------------------------    
    leftBtn.addEventListener('click',function(e){
        count=count-width;
        if( count<0){
            count=sliderLineWidth-width;
        }
        { sliderLine.style.left= -count +"px";}
         })
// листаем вправо---------------------------------------------------------
    rightBtn.addEventListener('click', function(e){
        count=count+width;
        if (count>=sliderLineWidth){
            count=0;
        }
        sliderLine.style.left= -count +"px";
        })
}
   // пересчитываем размер экрана---------------------------------
   window.addEventListener('resize', init);
init();


//-----------------burger-menu----------------------------
let burger=document.querySelector('.header__burger');
let menu=document.querySelector('.header__menu');
burger.addEventListener('click', function(e){
    menu.classList.toggle('visible');
    burger.classList.toggle('cross');
    body.classList.toggle('bodyLock')
})
// tabs------------------------------------------------------------------------    
window.addEventListener('click',function(e){
    if (e.target.classList.contains('tabs__title')){
        let tabName=e.target.getAttribute('data');
        e.target.classList.add('tabs__title-active');
        e.preventDefault();
        let currentTab=document.getElementById(tabName);
        let AllTabs=document.querySelectorAll('.tabs__content');
        AllTabs.forEach(function(item){
            item.style.display="none";
        })
        currentTab.style.display="block";
        document.querySelector('.tabs__title').classList.remove('tabs__title-active')
    }
})
document.querySelector('.tabs__title').click();
document.querySelector('.tabs__title').classList.add('tabs__title-active')

// accordeon-------------------------------------------------------------    
let contentTitles= document.querySelectorAll('.tabs__content__item-row1');
for( let i=0; i<contentTitles.length; i++){
    let contentTitle=contentTitles[i];
    contentTitle.addEventListener('click', function(){
let currentItem=contentTitle.closest('.tabs__content__item');
let allTabText=document.querySelectorAll('.tabs__content-text');
allTabText.forEach(function(item){
    item.style.display="none";
})

let currentText=currentItem.querySelector('.tabs__content-text');
currentText.style.display="block";
    })
}

//-----------------scrollTop------------------------------------*/
let scrollButton=document.querySelector('.arrow__top');
scrollButton.addEventListener('click', function(){
    window.scrollTo(0, 0);
})


