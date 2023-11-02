
//form.addEventListner ("submit",function(e) 

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let tbody = document.querySelector('tbody');
    let tr = document.createElement('tr');
    tbody.appendChild(tr);

    let tdOne = document.createElement('td');
    tdOne.innerHTML = input.value;
    tr.append(tdOne);

    let tdTwo = document.createElement('td');
    tdTwo.innerHTML = select.value;
    tr.append(tdTwo);

    let radios = document.querySelectorAll('#radios input');
    for (let i = 0; i < radios.length; i++) {

        if (radios[i].checked == true) {
            let tdThree = document.createElement('td');
            tdThree.innerHTML = radios[i].value;
            tr.append(tdThree);
        }
    }
    let tdFour = document.createElement('td');
    tr.append(tdFour);
    let tdEdit = document.createElement('button');
    let tdDel = document.createElement('button');
    tdFour.append(tdEdit);
    tdFour.append(tdDel);

    tdEdit.innerHTML = document.querySelector('.edit-button').innerHTML;
    tdEdit.className = "edit-button";
    tdDel.innerHTML = document.querySelector('.delete-button').innerHTML;
    tdDel.className = "delete-button";
    tr.append(tdFour);
    tdDel.onclick = function (event) {
        let deleteButton = event.target.closest('tr');
        deleteButton.remove();
    }

    tdEdit.onclick = function (e) {
        console.log("hh")
        let editTr = document.querySelector(".edit");
        if (editTr) {
            editTr.classList.remove("edit");
        }
        e.target.closest('tr').classList.add('edit');
        input.value = this.closest("tr").children[0].innerText;
        select.value = this.closest("tr").children[1].innerText;
        document.querySelector(`input[value="${this.closest("tr").children[2].innerText}"]`).checked = true;
    }
})


document.querySelector(".save-button").addEventListener('click', function (e) {
    console.log("sfdd")

    e.preventDefault()
    let editTr = document.querySelector(".edit");
    console.log(editTr)
    if (editTr) {
        console.log("sfdd")
        editTr.firstChild.innerHTML = input.value;
        editTr.children[1].innerHTML = select.value;

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].cheked == true) {
                editTr.children[2].innerHTML = radios[i].value;
            }
        }
        editTr.classList.remove("edit");
    }
})

