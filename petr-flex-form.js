console.log("PETR Flex Forms is Running!")

var forms = document.querySelector('*[petr-form-selector]');
var form = document.querySelector('*[petr-prev-form]');
var tbody = document.querySelector('*[petr-table-form]');

forms.addEventListener('change', renderView);

function renderView() {
    // Function to read and renderize the table and generate the result form
    form.innerHTML = `<form name="${forms.value}">`;
    tbody.innerHTML = genAddRow();

    fields.forEach(row => {
        if (row.form == forms.value){ 
            tbody.innerHTML += genRows(row);;
            form.innerHTML += genForm(row);
        }
    });
    form.innerHTML += "</form>";
    getInputs();
}



function getInputs() {
    // Function to control inputs in realtime

    let tbInputs = document.querySelectorAll('*[petr-form-field]');
    tbInputs.forEach(el => {
        el.addEventListener('change', event => {
            update(event.target.id, event.target.value)
        });
    });
}

function add($id) {
    // Function to add a new line in form

    let field = {
        id: $id,
        form: document.getElementById(`form-${$id}`).value,
        name: document.getElementById(`name-${$id}`).value,
        type: document.getElementById(`type-${$id}`).value,
        placeholder: document.getElementById(`placeholder-${$id}`).value,
        label: document.getElementById(`label-${$id}`).value
    }
    fields[$id] = field;
    renderView();
}

function rem($id) {
    // Function to remove a line in form

    delete fields[$id];
    renderView();
}

function update($id, $value) {
    // Function to update data in object

    let arrow = $id.split('-');
    fields[arrow[1]][arrow[0]] = $value;
    renderView();
}

const genOptions = ($name, $value) => {
    //Generator the options to select 
    const $data = options[$name];
    let optionGen;
    $data.forEach(data => {
        optionGen += optGen(data, $value);
    });
    return optionGen;
}
