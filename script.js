console.log("Script Works");

var forms = document.getElementById('forms');
var form = document.getElementById('container');
var tbody = document.querySelector('*[petr-table-form]');

forms.addEventListener('change', renderView);

function renderView(){
    var tr;     
    let typies;
    
    tbody.innerHTML = "";
    form.innerHTML = `
        <form name="${forms.value}">
    `;

    fields.forEach(row => {
        typies = '';
        if (row.form == forms.value){ 
            tr = `
                <td> ${row.form} </td>
                <td> <input petr-form-field id="name-${row.id}" class="border-b iTable" id="" value="${row.name}"> </td>
                <td> 
                    <select petr-form-field id="type-${row.id}" class="border iTable">
                        <option disabled value=""> Selecione o tipo </option>
                        ${types.forEach(f => typies += `<option ${f === row.type ? 'selected':''} value="${f}">${f}</option>`)}
                        ${typies}
                    </select>
                </td>
                <td> <input petr-form-field id="placeholder-${row.id}" class="border-b iTable" value="${row.placeholder}"> </td>
                <td> <input petr-form-field id="label-${row.id}" class="border-b iTable" value="${row.label}"> </td>
                <td> <button onclick="renderView()"> Refresh </button> </td>
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