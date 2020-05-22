var types = [
    'text',
    'email',
    'number',
    'password',
    'radio',
    'checkbox',
    'select',
    'option',
    'textarea'
];

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
        label: 'Nome de utilizador'
    },
    {
        id: 1,
        form: 'signin',
        name: 'password',
        type: 'password',
        placeholder: 'Insira a palavra-passe',
        label: 'Palavra-passe'
    },
    {
        id: 2,
        form: 'signup',
        name: 'fullname',
        type: 'text',
        placeholder: 'Insira o seu nome completo',
        label: 'Nome Completo'
    },
    {
        id: 3,
        form: 'signup',
        name: 'username',
        type: 'text',
        placeholder: 'Insira um nome de utilizado válido',
        label: 'Nome de utilizador'
    },
    {
        id: 4,
        form: 'signup',
        name: 'password',
        type: 'password',
        placeholder: 'Crie uma palavra-passe válida',
        label: 'Palavra-passe'
    }
];
