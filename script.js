console.log("Script Works");

var forms = document.getElementById('forms');
var form = document.getElementById('container');
var tbody = document.querySelector('*[petr-table-form]');

forms.addEventListener('change', renderView);

function renderView(){
    var tr;     
    let typies;
    

    form.innerHTML = `
        <form name="${forms.value}">
    `;

    tbody.innerHTML = `
        <td> <input disabled id="form-${fields.length}" value="${forms.value}" /></td>
        <td> 
            <input id="name-${fields.length}" class="border" value=""> 
        </td>
        <td> 
            <select id="type-${fields.length}" class="border">
                <option disabled selected value=""> Selecione o tipo </option>
                ${types.forEach(f => typies += `<option value="${f}">${f}</option>`)}
                ${typies}
            </select>
        </td>
        <td> <input id="placeholder-${fields.length}" class="border" value=""> </td>
        <td> <input id="label-${fields.length}" class="border" value=""> </td>
        <td> <button onclick="add(${fields.length})" class="w-total"> Add </button> </td>
    
    `;

    fields.forEach(row => {
        typies = '';
        if (row.form == forms.value){ 
            tr = `
                <td> ${row.form} </td>
                <td> <input petr-form-field id="name-${row.id}" class="border" value="${row.name}"> </td>
                <td> 
                    <select petr-form-field id="type-${row.id}" class="border">
                        <option disabled value=""> Selecione o tipo </option>
                        ${types.forEach(f => typies += `<option ${f === row.type ? 'selected':''} value="${f}">${f}</option>`)}
                        ${typies}
                    </select>
                </td>
                <td> <input petr-form-field id="placeholder-${row.id}" class="border" value="${row.placeholder}"> </td>
                <td> <input petr-form-field id="label-${row.id}" class="border" value="${row.label}"> </td>
                <td> <button onclick="rem(${row.id})" class="w-total"> Delete </button> </td>
            `;

            tbody.innerHTML += `<tr> ${tr} </tr>`;

            form.innerHTML += `
                <br /><label> ${row.label} <br />
                <input class="border-b" type="${row.type}" name="${row.name}" placeholder="${row.placeholder}">
                </label>
            `;
        }
    });

    form.innerHTML += "</form>";
    getInputs();
}

function refresh($id, $value) {
    let arrow = $id.split('-');
    fields[arrow[1]][arrow[0]] = $value;
    renderView();
}

function getInputs() {
    let tbInputs = document.querySelectorAll('*[petr-form-field]');

    tbInputs.forEach(el => {
        el.addEventListener('change', event => {
            refresh(event.target.id, event.target.value)
        });
    });
}

function rem($id) {
    delete fields[$id];
    renderView();
}

function add($id) {
    let field = {
        id: $id,
        form: document.getElementById(`form-${$id}`).value,
        name: document.getElementById(`name-${$id}`).value,
        type: document.getElementById(`type-${$id}`).value,
        placeholder: document.getElementById(`placeholder-${$id}`).value,
        label: document.getElementById(`label-${$id}`).value
    }
    fields[$id] = field;
    renderView
}