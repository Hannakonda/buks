var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails(){
	var name = document.getElementById("name").value;
	if (document.getElementById("name").value === ""){
		alert("Please fill name");
		return;
	}
	var age = document.getElementById("age").value;
	var isActive;

	if (document.getElementById('is_active_yes').checked) {
		isActive = document.getElementById('is_active_yes').value
	} else if(document.getElementById('is_active_no').checked) {
		isActive = document.getElementById('is_active_no').value
	} else {
		alert("Please select");
		return;
	}
	
	var name1 = document.querySelector('input[id="sleep"]:checked');
	var name2 = document.querySelector('input[id="spit"]:checked');
	var name3 = document.querySelector('input[id="ruin"]:checked');
	var name4 = document.querySelector('input[id="catch"]:checked');

	if (!document.getElementById('sleep').checked && !document.getElementById('spit').checked && !document.getElementById('ruin').checked && !document.getElementById('catch').checked){
		alert("Please select checkbox");
		return;
	}

	var totalNames = [name1, name2, name3, name4]
	.filter(Boolean)
	.map(function(item) {return item.value})
	.join(", ")


	var display = document.getElementById("display")

	var newRow = display.insertRow(row);

	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);

	cell1.innerHTML = name;
	cell2.innerHTML = age;
	cell3.innerHTML = isActive
	cell4.innerHTML = totalNames;
	
}
