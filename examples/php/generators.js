/*
*   G E N E R A T O R   -   H T M L
*
*   This file was only design to be able edit your HTML Source
* 
*/
const optGen = ($data, $value) => 
    (`<option 
        ${$data.value === $value ? 'selected' : '' } 
        value="${$data.value}">
            ${$data.description != '' ? $data.description : $data.value }
    </option>`);
 
const genRows = $row =>  {
    //Generator the rows data of table
    return `
        <tr>
            <td> <input type="readonly" value="${$row.form}" /> </td>
            <td> <input petr-form-field id="name-${$row.id}" class="border" value="${$row.name}"> </td>
            <td> 
                <select petr-form-field id="type-${$row.id}" class="border">
                    <option disabled value=""> Selecione o tipo </option>
                    ${genOptions('type', $row.type)}
                </select>
            </td>
            <td> <input petr-form-field id="placeholder-${$row.id}" class="border" value="${$row.placeholder}"> </td>
            <td> <input petr-form-field id="label-${$row.id}" class="border" value="${$row.label}"> </td>
            <td> <input petr-form-field id="value-${$row.id}" class="border" placeholder="Valor predefinido" value="${$row.value}"> </td>
            <td> <button onclick="rem(${$row.id})" class="w-total"> Delete </button> </td>
        </tr>
    `;
}

const genAddRow = () => {
    //Generator the row to add a new field
    return `
        <td> <input type="readonly" id="form-${fields.length}" value="${forms.value}" /></td>
        <td> 
            <input id="name-${fields.length}" class="border" value=""> 
        </td>
        <td> 
            <select id="type-${fields.length}" class="border">
                <option disabled selected value=""> Selecione o tipo </option>
                ${genOptions('type', '')}
            </select>
        </td>
        <td> <input id="placeholder-${fields.length}" class="border" value=""> </td>
        <td> <input id="label-${fields.length}" class="border" value=""> </td>
        <td> <input id="value-${fields.length}" class="border" placeholder="Valor predefinido"  value=""> </td>
        <td> <button onclick="add(${fields.length})" class="w-total"> Add </button> </td>
    
    `;
}

const genForm = $row => {
    //Generator the form

    const genField = $row => {
        if($row.type == 'textarea')
            return `
                <textarea class="border w-total" name="${$row.name}" placeholder="${$row.placeholder}"></textarea>
            `;
        else if($row.type == 'select')
            return `
                <select class="border  w-total" name="${$row.name}">
                    <option ${$row.value == '' ? 'selected' : ''} disabled value=''> ${$row.placeholder} </option>
                    ${genOptions($row.name, $row.value)}
                </select>
            `;
        return `
            <input class="border-b w-total" type="${$row.type}" name="${$row.name}" placeholder="${$row.placeholder}">
        `;
    } 
    return `
        <label> 
            <span>${$row.label}</span>
            ${genField($row)}
        </label>
    `;
}