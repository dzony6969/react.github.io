import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    //console.log('ACTION received', action); --wazne, sprawdz console
    switch (action.type) {
        case FETCH_WEATHER:
       // return state.concat([action.payload.data]); to samo co nizej tylko es5
        return [action.payload.data, ...state];
    }
//nigdy nie rob manipuluj state!!! np this.state === action
    return state;
}