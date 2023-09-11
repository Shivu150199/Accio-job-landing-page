'use strict'

// Question toggle
let questions = document.querySelectorAll('.que')
const show = document.querySelectorAll('.answer')
// console.log(show)

questions.forEach((question) => {
  const btn = question.querySelector('.show-btn')

  const showBtn = question.nextElementSibling

  btn.addEventListener('click', () => {
    show.forEach((item) => {
      if (item !== showBtn) {
        item.classList.remove('show-answer')
      }
    })

    showBtn.classList.toggle('show-answer')
  })
})
/////////////////////////////////////////////////////////////



// function


const btnContainer=document.querySelector('.fn-btn-container')
console.log(btnContainer)

const btns=document.querySelectorAll('.tab-btn')

const articles=document.querySelectorAll('.fn-content-container')
btnContainer.addEventListener('click',(e)=>{
  const id =e.target.dataset.id;
  console.log(id)
  if(id){
btns.forEach((btn)=>{
btn.classList.remove('active-btn')
})
e.target.classList.add('active-btn')

  }
articles.forEach((article)=>{
  article.classList.remove('active-fn')
})

const element=document.getElementById(id);
element.classList.add('active-fn')

})