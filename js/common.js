let headerWrapper=document.getElementsByClassName('header-wrapper')[0]
let burger=document.querySelector('.burgermenu')

function setSticky(){
    if(document.documentElement.scrollTop>5){
     headerWrapper.classList.add('sticky')
  
    if(document.documentElement.scrollTop>200){
        upToHeader.classList.add('visible')
    } else{
        upToHeader.classList.remove('visible')
    }
    } else{
        headerWrapper.classList.remove('sticky')
    
      
    }
}
searchIcon.addEventListener('click',function(){
    topServices.classList.add('services-hide')
    callSearch.classList.add('search-active')
})
document.addEventListener('scroll',setSticky)
document.addEventListener('DOMContentLoaded',function(){
    sidebar.prepend(topServices.firstElementChild.cloneNode(true))
    servicesBox.append(topServices.firstElementChild.cloneNode(true))
    let collectionOfDropdown=sidebar.firstElementChild.getElementsByClassName('dropdown-parent')
    console.log(collectionOfDropdown)
   Array.from(collectionOfDropdown).map(elem=>{
        
        elem.insertAdjacentHTML('afterbegin','<span class="more-info">C</span>')
    })
    document.querySelectorAll('.more-info').forEach(elem=>{
        elem.addEventListener('click',function(){
                
                sidebar.firstElementChild.classList.add('move-left')
               if(holder.lastElementChild.classList.contains('dropdownMenu')){
                   holder.replaceChild(this.nextElementSibling.cloneNode(true),holder.lastElementChild)
                  
               } else{
                holder.append(this.nextElementSibling.cloneNode(true))
               }
                holder.classList.add('move-right')
               

            
        })
    })
})
burger.addEventListener('click',function(e){
    if(document.documentElement.clientWidth<1200){
    document.body.classList.add('overflow-hidden')
    mainBlock.classList.add('hidden')
    sidebar.scrollIntoView(top)
    
    }else{
   e.target===closer? burgerServices.classList.remove('show'):burgerServices.classList.add('show')}

})


mainBlock.addEventListener('click',function(e){
    if(e.target.classList.contains('hidden')){
        e.target.classList.remove('hidden')
        sidebar.classList.remove('opened')
        document.body.classList.remove('overflow-hidden')
    }
})
searchCloser.addEventListener('click',function(){
    topServices.classList.remove('services-hide')
    callSearch.classList.remove('search-active')
})
arrowBack.addEventListener('click',function(){
    sidebar.firstElementChild.classList.remove('move-left')
    holder.classList.remove('move-right')
})
submit.addEventListener('click',function(){
    let first=validate(nameInput,regularExpressionName)
    let second=validate(telInput,regularExpressionTel)
    let third=validate(emailInput,regularExpressionEmail)
    console.log(first,second,third)
    if(first&&second&&third){
        boxMistakes.className='mistakes'
    } else{
        boxMistakes.className='mistakes-opened'
    }
    validate(emailInput,regularExpressionEmail)
})

let regularExpressionName=/^[a-zA-Z]{3,10}$/
let regularExpressionTel=/^0[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/
let regularExpressionEmail=/^[a-zA-Z0-9-.]+@[a-z]+\.[a-z]{2,3}$/

function validate(elem,regExp){
if(elem.value===''){
elem.parentElement.className='label-empty'
elem.className='error'
return false
} else{
if(regExp.test(elem.value)){
elem.parentElement.className='label'
elem.className=''
return true
}else{
    elem.parentElement.className='label-wrong'
    elem.className='error'
    return false
}
}

}
