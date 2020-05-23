var options = {
    gender: [
        { value: 'M', description: 'Masculino' },
        { value: 'F', description: 'Feminino' }
    ],
    types: [ 
        { value: 'text' },
        { value: 'email' },
        { value: 'number' },
        { value: 'password' },
        { value: 'radio' },
        { value: 'checkbox' },
        { value: 'color' },
        { value: 'date' },
        { value: 'datetime-local' },
        { value: 'file' },
        { value: 'image' },
        { value: 'month' },
        { value: 'range' },
        { value: 'search' },
        { value: 'time' },
        { value: 'url' },
        { value: 'week' },
        { value: 'tel' },
        { value: 'select' },
        { value: 'option' },
        { value: 'textarea' }
    ]
}

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
];

var fields = [
    {
        id: 0,
        form: 'signin',
        name: 'username',
        type: 'text',
        placeholder: 'Insira o nome de utilizador',
        label: 'Nome de utilizador',
        options: [],
        value:''
    },
    {
        id: 1,
        form: 'signin',
        name: 'password',
        type: 'password',
        placeholder: 'Insira a palavra-passe',
        label: 'Palavra-passe',
        options: [],
        value:''
    },
    {
        id: 2,
        form: 'signup',
        name: 'fullname',
        type: 'text',
        placeholder: 'Insira o seu nome completo',
        label: 'Nome Completo',
        options: [],
        value:''
    },
    {
        id: 3,
        form: 'signup',
        name: 'username',
        type: 'text',
        placeholder: 'Insira um nome de utilizado válido',
        label: 'Nome de utilizador',
        options: [],
        value:''
    },
    {
        id: 4,
        form: 'signup',
        name: 'gender',
        type: 'select',
        placeholder: 'Insira um nome de utilizado válido',
        label: 'Nome de utilizador',
        options: [
            {
                value: 'M',
                description: 'Masculino'
            },
            {
                value: 'F',
                description: 'Feminino'
            }
        ],
        value:''
    },
    {
        id: 5,
        form: 'signup',
        name: 'password',
        type: 'password',
        placeholder: 'Crie uma palavra-passe válida',
        label: 'Palavra-passe',
        options: [],
        value:''
    }
];
