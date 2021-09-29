const modelBtn=document.querySelector('.btn');
const closeBtn= document.querySelector('.close-btn')
const modelOverLay=document.querySelector('.modal-overlay')
modelBtn.addEventListener('click',()=>{
modelOverLay.classList.add('open-modal')
});
closeBtn.addEventListener('click',()=>{
    modelOverLay.classList.remove('open-modal')
})