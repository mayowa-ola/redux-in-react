import * as actions from './actionsType';

let lastId = 0;
export default function reducer(state= [], action) {
    //using switch
    switch(action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    resolved: false,
                    description: action.payload.description
                }
            ]
        case actions.BUG_REMOVED :
            return  state.filter(bug => bug.id !== action.payload.id);

        case actions.BUG_RESOLVED :
            return  state.map(bug => (bug.id === action.payload.id) ? {...bug, resolved:true} : bug);
        default:  
            return state;
    }
    //using if and else
    // if(action.type === 'bugAdded') {
    //     return [
    //         ...state,
    //         {
    //             id: ++lastId,
    //             resolved: false,
    //             description: action.payload.description
    //         }
    //     ]
    // }
    // else if(action.type === 'bugRemoved') {
    //   return  state.filter(bug => bug.id !== action.payload.id)
    // }
    // else return state;

}