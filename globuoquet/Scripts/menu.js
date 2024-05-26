let toggleBtn = document.querySelector('.toggle_btn')
let toggleBtnIcon = document.querySelector('.toggle_btn i')
let droDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    droDownMenu.classList.toggle('open')
    let isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
