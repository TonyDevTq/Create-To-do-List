const form = document.getElementById('crud-form');
const useInput = document.getElementById('item-input');
const showitem = document.getElementById('item-list');
let allItems = JSON.parse(localStorage.getItem('allItems')) || [];

function saveToLocalStorage(){
    localStorage.setItem('allItems', JSON.stringify(allItems))
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    const newItem = useInput.value.trim();
    console.log(newItem)
    if(newItem){
        allItems.push(newItem);
        useInput.value = '';
        saveToLocalStorage();
        renderListItem();
    }
})
function renderListItem(){
    showitem.innerHTML = '';
    allItems.forEach((item, index) =>{
        const li = document.createElement('li');
        li.innerHTML = `
            ${item}
            <div>
                <button onClick = "editItem(${index})">Edit</button>
                <button onClick = "deleteItem(${index})">Delete</button>
            </div>
        `
        showitem.appendChild(li);
    })
}
function editItem(index){
    const newItemEdit = prompt('Edit Option: ', allItems[index]);
    if(newItemEdit !== null && newItemEdit.trim() !== ''){
        allItems[index] = newItemEdit.trim();
        saveToLocalStorage();
        renderListItem();
    }
}
function deleteItem(index){
    if(confirm('You can delete option ?'))
    allItems.splice(index, 1);
    saveToLocalStorage();
    renderListItem();
}
renderListItem();
