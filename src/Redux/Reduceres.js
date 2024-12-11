const initial = {
    UserLogin:[],
    UserRegister : [],
    check :{},
    IdPlus :1,
    idx:0,
    inupdate :false,
    msg :""
}
export function Reduceres( state = initial , action){
    switch(action.type){
        case "login":
            return(
                {
                    ...state,
                    check : action.payload.finded,
                }
            )
        case "register":
            return(
                {
                    ...state,
                    IdPlus : state.IdPlus+1,
                    UserRegister : [...state.UserRegister , {id : state.IdPlus, ...action.payload.Register }],
                    
                }
            )
        case "update":
            return(
                {
                    ...state,
                    inupdate :true,
                    idx :action.payload.id
                }
            )
            case "edit":
                return {
                  ...state,
                  UserRegister: state.UserRegister.map((e) =>
                    e.id === state.idx ? { ...e, ...action.payload.userUpdate } : e
                  ),
                  check : { ...state.check, ...action.payload.userUpdate },
                  inupdate: false,
                };
              
        default:
            return(state)
    }
}