const initial = {
    UserRegister: [
        {id: 1, Nom: "", Prenom: "", UserName: "admin", Numero: null, Email: "", Password: "admin", Role : 'admin'},
        {id: 2, Nom: "", Prenom: "", UserName: "admin1", Numero: null, Email: "", Password: "admin1", Role : 'admin'},
    ],
    check: {},
    IdPlus: 3,
    idx: 0,
    inupdate: false,
    msg: ""
};

// Retrieve state from localStorage on app load
const storedState = localStorage.getItem('appState');
const initialState = storedState ? JSON.parse(storedState) : initial;

export function Reduceres(state = initialState, action) {
    let newState;

    switch (action.type) {
        case "login":
            newState = {
                ...state,
                check: action.payload.finded,
            };
            break;

        case "register":
            newState = {
                ...state,
                IdPlus: state.IdPlus + 1,
                UserRegister: [...state.UserRegister, { id: state.IdPlus, ...action.payload.Register }],
            };
            break;

        case "update":
            newState = {
                ...state,
                inupdate: true,
                idx: action.payload.id
            };
            break;

        case "edit":
            newState = {
                ...state,
                UserRegister: state.UserRegister.map((e) =>
                    e.id === state.idx ? { ...e, ...action.payload.userUpdate } : e
                ),
                check: { ...state.check, ...action.payload.userUpdate },
                inupdate: false,
            };
            break;

        case "logout":
            newState = {
                ...state,
                check: {}
            };
            break;

        case "updatePass":
            newState = {
                ...state,
                UserRegister: state.UserRegister.map((e) =>
                    e.id === action.payload.idPass ? { ...e, Password: action.payload.newPass } : e
                ),

            };
            break;

        case "chofar":
            newState = {
                ...state,
                check: {}
            };
            break;


        default:
            newState = state;
    }

    // Save the new state to localStorage whenever it changes
    localStorage.setItem('appState', JSON.stringify(newState));

    return newState;
}
