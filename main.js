const form = document.getElementById('crud-form');
const useInput = document.getElementById('item-input');
const showitem = document.getElementById('item-list');
let allItems = [];

form.addEventListener('submit', function(event){
    event.preventDefault();
    const newItem = useInput.value.trim();
    console.log(newItem)
    if(newItem){
        allItems.push(newItem);
        useInput.value = '';
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
        allItems[index] = newItemEdit.trim()
        renderListItem();
    }
}
function deleteItem(index){
    if(confirm('You can delete option ?'))
    allItems.splice(index, 1);
    renderListItem();
}
renderListItem();


