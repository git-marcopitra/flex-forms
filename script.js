console.log("Script Works");

var forms = document.getElementById('forms');
var tbInputs = document.querySelectorAll('.dados');

if (forms) 
    forms.addEventListener('change', tarefa);


tbInputs.forEach(el => {
    el.addEventListener('blur', updateForm);
});

var formy =  [
    {
        idForm: 1,
        formCode: "signin",
        formName: "Sign In"
    },
    {
        idForm: 2,
        formCode: "signup",
        formName: "Sign Up"
    }
]

var types = [
    'text',
    'number',
    'password',
    'radio',
    'checkbox',
    'select',
    'option',
    'text'
]

var fields = [
    {
        form: 'signin',
        field: 'si-username',
        type: 'text',
        placeholder: 'Nome de utilizado'
    },
    {
        form: 'signin',
        field: 'si-password',
        type: 'password',
        placeholder: 'Palavra-passe'
    },
    {
        form: 'signup',
        field: 'su-fullname',
        type: 'text',
        placeholder: 'Nome Completo'
    },
    {
        form: 'signup',
        field: 'su-username',
        type: 'text',
        placeholder: 'Nome de utilizado'
    },
    {
        form: 'signup',
        field: 'su-password',
        type: 'password',
        placeholder: 'Palavra-passe'
    }
];

var tbody = document.getElementById('corpo');
var form = document.getElementById('container');

function tarefa(){
    var tr;     
    let formies;
    let typies;
    
    tbody.innerHTML = "";
    form.innerHTML = `
        <legend>Pre-visualização</legend>
        <form name="${forms.value}">
    ` ;

    fields.map(row => {
        formies = '';
        typies = '';
        if (row.form == forms.value){ 
            tr = `
                <td> 
                    <select value="${row.form}">
                        <option disabled value=""> Selecione o formulário </option>
                        ${formy.forEach(f => formies += `<option ${forms.value === f.formCode ? 'selected':''} value="${f.formCode}">${f.formName}</option>`)}
                        ${formies}
                    </select>
                </td>
                <td> <input class="dados" value="${row.field}"> </td>
                <td> 
                    <select value="${row.type}">
                        <option disabled value=""> Selecione o tipo </option>
                        ${types.forEach(f => typies += `<option ${f === row.type ? 'selected':''} value="${f}">${f}</option>`)}
                        ${typies}
                    </select>
                </td>
                <td> <input id="p-${row.field}" class="dados" value="${row.placeholder}"> </td>
                <td><button onclick="tarefa()"> OK </button></td>
            `;

            tbody.innerHTML += `<tr> ${tr} </tr>`;

            form.innerHTML += `
                <br /><label> ${row.placeholder} <br />
                <input type="${row.type}" name="${row.field}" placeholder="${row.placeholder}">
                </label>
            `;
        }
    });
    form.innerHTML += "</form>"
}