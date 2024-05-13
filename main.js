const newItem = document.querySelector('#item_to_add')
const ulElements = document.querySelector('#to_do_list')
const addButton = document.querySelector('#addItem')
const completedList = document.querySelector('#completed_list')
const eliminateButton = document.querySelector('#delete')
const resetButton = document.querySelector('#reset');

const completedElements = [];

function addItem(event) {
    if(event.target.tagName !== 'INPUT') {
        const newLiElement = document.createElement('li');
        
        const newCheckbox = document.createElement('input')
        newCheckbox.type = 'checkbox';
        
        newLiElement.textContent = newItem.value;
        newLiElement.appendChild(newCheckbox);
        ulElements.appendChild(newLiElement);
        newItem.value = '';

        newCheckbox.addEventListener('change',itemCompleted);
    }
    }
    addButton.addEventListener("click",addItem)

    function itemCompleted(event) {
        const checkbox = event.target;
        const listItem = checkbox.parentNode;

        if(checkbox.checked) {
            completedList.appendChild(listItem);
            completedElements.push(listItem);
        }
    }

    function deleteItem() {
        const listItem = ulElements.querySelector('li:last-child');
       listItem.remove();
    }
    eliminateButton.addEventListener("click", deleteItem);

    function clearList() {
        completedList.innerHTML = '';
        // completedElements.splice(0,completedElements.length);
    }
    resetButton.addEventListener("click",clearList);




