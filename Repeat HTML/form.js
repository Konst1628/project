form.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputs = [user, phone, message,checkbox]
    console.log(inputs);
    let span = document.querySelectorAll('.one')
    for (let i = 0; i < inputs.length; i++)
        if (inputs[i].value == '' || inputs[i].cheked!=true) {
            span[i].innerHTML = "Поле обязательно для заполнения";
        }
    ;
})