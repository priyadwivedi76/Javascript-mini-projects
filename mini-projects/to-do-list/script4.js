const inputData=document.querySelector('.input-body');
const addBtn=document.querySelector('.addbtn');
const delBtn=document.querySelector('.delete')
const parentList=document.querySelector('.to-do')
const childList=document.querySelector('.child')
addBtn.addEventListener('click',()=>{
    let value=inputData.value;

    //Create list of todo-added
    let childTodo=document.createElement('li')
    childTodo.classList.add('child')
    childTodo.textContent=value;

    //Create the button attached to every individual todo
    let Deletebutton=document.createElement('button');
    Deletebutton.textContent='X';
    Deletebutton.classList.add('delete')
    //Append the button to individual list and individual list to main container
    childTodo.appendChild(Deletebutton);
    parentList.append(childTodo)
    
    //Make sure to empty the todo after it gets added
    inputData.value='';
})

parentList.addEventListener('click',(event)=>{
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
})