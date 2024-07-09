const myTodoList = document.getElementById('myTodoList');
const insertTasks = document.getElementById('insertTasks');
const bntInsert = document.getElementById('bntInsert');
const toDo = document.getElementById('toDo');
const myList = [];
const completedItems = [];


btnInsert.addEventListener('click', function (e) {
	e.preventDefault();
	if (!checkInput()) return;
	popolateArray();
	printList();
	myTodoList.reset();
});

function checkInput() {
	if (insertTasks.value === '') {
		return false;
	} else {
		return true;
	}
}

function popolateArray() {
	myList.push(insertTasks.value);
	console.log(myList);
}

function printList() {
	toDo.innerHTML = '';
	for (let i = 0; i < myList.length; i++) {
		let newDiv = document.createElement('p');
		newDiv.innerText = myList[i];

        if (completedItems[i]){
            newDiv.classList.add('completed');
        }

        newDiv.addEventListener('click', function(){
            newDiv.classList.toggle('completed');
            completedItems[i] = !completedItems[i];
        });

		let btnDelete = document.createElement('button');
		btnDelete.setAttribute('type', 'button');
		btnDelete.setAttribute('onclick', `deleteItem(${i});`);

        let deleteIcon = document.createElement('ion-icon');
        deleteIcon.setAttribute('name', 'trash-outline');
        btnDelete.appendChild(deleteIcon);
		//btnDelete.innerHTML = 'X';
		newDiv.appendChild(btnDelete);
		toDo.appendChild(newDiv);
	}
}

function deleteItem(index) {
	myList.splice(index, 1); 
	printList(); 
}