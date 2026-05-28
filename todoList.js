let inputText = document.querySelector('#inputText');
const ul = document.querySelector('ul');

const addBtn = document.querySelector('#addBtn');

let varText = inputText.value;

function addItemToList(){
  const li = document.createElement('li');
  ul.append(li);
  li.innerText = inputText.value;

  inputText.value = ''; //clears the input box
}

addBtn.addEventListener('click', addItemToList);

