window.onload = () => {
    console.log("PETR Script is running perfectly!");
}

function changeView($class, $id){
    let classes = document.querySelectorAll(`.${$class}`);
    classes.forEach(element => {
        if(element.id !== $id)
            element.classList.add('fade-off');
    }); 
    let element = document.querySelector(`#${$id}`);
    element.classList.contains('fade-off') ? element.classList.remove('fade-off') : element.classList.add('fade-off') ;
}

