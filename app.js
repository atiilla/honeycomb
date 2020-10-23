const cell = document.querySelectorAll('.honeycomb-cell');
const modal_title = document.getElementById('title');
const modal_body = document.querySelector('.modal-body');

cell.forEach(cell => {

    cell.setAttribute('data-toggle', 'modal');
    cell.setAttribute('data-target', '#info')

    cell.addEventListener('click', (event) => {
        console.log(event.target.innerHTML)
        
        modal_title.innerHTML= event.target.innerHTML
        // modal_body.innerHTML="This is COOL!"
    })

})