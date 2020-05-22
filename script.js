console.log("Script Works");

var forms = document.getElementById('forms');
var tbody = document.getElementById('corpo');
var form = document.getElementById('container');

forms.addEventListener('change', renderView);

function renderView(){
    var tr;     
    let typies;
    
    tbody.innerHTML = "";
    form.innerHTML = `
        <legend>Pre-visualização</legend>
        <form name="${forms.value}">
    `;

    fields.forEach(row => {
        typies = '';
        if (row.form == forms.value){ 
            tr = `
                <td> ${row.form} </td>
                <td> <input id="name-${row.id}" class="iTable" id="" value="${row.name}"> </td>
                <td> 
                    <select id="type-${row.id}" class="iTable">
                        <option disabled value=""> Selecione o tipo </option>
                        ${types.forEach(f => typies += `<option ${f === row.type ? 'selected':''} value="${f}">${f}</option>`)}
                        ${typies}
                    </select>
                </td>
                <td> <input id="placeholder-${row.id}" class="iTable" value="${row.placeholder}"> </td>
                <td> <button onclick="tarefa()"> Refresh </button> </td>
            `;

            tbody.innerHTML += `<tr> ${tr} </tr>`;

            form.innerHTML += `
                <br /><label> ${row.placeholder} <br />
                <input type="${row.type}" name="${row.name}" placeholder="${row.placeholder}">
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
    let tbInputs = document.querySelectorAll('.iTable');

    tbInputs.forEach(el => {
        el.addEventListener('change', event => {
            refresh(event.target.id, event.target.value)
        });
    });
}