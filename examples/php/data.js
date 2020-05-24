var options = [
    { id: 0,    option: 'gender',   value: 'M',             description: 'Masculino' },
    { id: 1,    option: 'gender',   value: 'F',             description: 'Feminino' },
    { id: 2,    option: 'type',     value: 'text',          description: '' },
    { id: 3,    option: 'type',     value: 'email',         description: '' },
    { id: 4,    option: 'type',     value: 'number',        description: '' },
    { id: 5,    option: 'type',     value: 'password',      description: '' },
    { id: 6,    option: 'type',     value: 'radio',         description: '' },
    { id: 7,    option: 'type',     value: 'checkbox',      description: '' },
    { id: 8,    option: 'type',     value: 'color',         description: '' },
    { id: 9,    option: 'type',     value: 'date',          description: '' },
    { id: 10,   option: 'type',     value: 'datetime-local',description: '' },
    { id: 11,   option: 'type',     value: 'file',          description: '' },
    { id: 12,   option: 'type',     value: 'image',         description: '' },
    { id: 13,   option: 'type',     value: 'month',         description: '' },
    { id: 14,   option: 'type',     value: 'range',         description: '' },
    { id: 15,   option: 'type',     value: 'search',        description: '' },
    { id: 16,   option: 'type',     value: 'time',          description: '' },
    { id: 17,   option: 'type',     value: 'url',           description: '' },
    { id: 18,   option: 'type',     value: 'week',          description: '' },
    { id: 19,   option: 'type',     value: 'tel',           description: '' },
    { id: 20,   option: 'type',     value: 'select',        description: '' },
    { id: 21,   option: 'type',     value: 'option' ,       description: '' },
    { id: 22,   option: 'type',     value: 'textarea',      description: '' }
];

var formy =  [
    {   id: 1,  formCode: "signin", formName: "Sign In" },
    {   id: 2,  formCode: "signup", formName: "Sign Up" }
];

var fields = [
    {
        id: 0,
        form: 'signin',
        name: 'username',
        type: 'text',
        placeholder: 'Insira o nome de utilizador',
        label: 'Nome de utilizador',
        value:''
    },
    {
        id: 1,
        form: 'signin',
        name: 'password',
        type: 'password',
        placeholder: 'Insira a palavra-passe',
        label: 'Palavra-passe',
        value:''
    },
    {
        id: 2,
        form: 'signup',
        name: 'fullname',
        type: 'text',
        placeholder: 'Insira o seu nome completo',
        label: 'Nome Completo',
        value:''
    },
    {
        id: 3,
        form: 'signup',
        name: 'username',
        type: 'text',
        placeholder: 'Insira um nome de utilizado válido',
        label: 'Nome de utilizador',
        value:''
    },
    {
        id: 4,
        form: 'signup',
        name: 'gender',
        type: 'select',
        placeholder: 'Insira um nome de utilizado válido',
        label: 'Nome de utilizador',
        option: 'gender',
        value:''
    },
    {
        id: 5,
        form: 'signup',
        name: 'password',
        type: 'password',
        placeholder: 'Crie uma palavra-passe válida',
        label: 'Palavra-passe',
        value:''
    }
];
