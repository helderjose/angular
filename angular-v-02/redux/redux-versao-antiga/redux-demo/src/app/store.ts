import { Map } from 'immutable';
import { tassign } from 'tassign';
import { INCREMENT } from './actions';

export interface IAppState {
    counter: number;
    // messaging?: {
    //     newMessages: number;
    // }
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
    // messaging: {
    //     newMessages: 5
    // }
}

// 241. Using Immutable.js
export function rootReducer(state: Map<string, any>, action): Map<string, any> {
    switch (action.type) {
        case INCREMENT:
        state.set('isOnline', true);
        // state.counter++; //erro, porque agora eh immutable
        return state.set('counter', state.get('counter') + 1);
    }
    return state;
}

// 240. Avoiding State Mutation
// export function rootReducer(state: IAppState, action): IAppState {
//     switch (action.type) {
//         case INCREMENT:
//         state.counter++; //falha no codigo, alterando diretamente. Será corrigido no próximo vídeo
//         return tassign(state, {counter: state.counter + 1});
//         // return tassign(state, {counter: state.counter + 1, isOnline: true});//só reconhece o que está declarado na interface, por isso dá erro no isOnline
//         // return Object.assign({}, state, {counter: state.counter + 1});

//         // return { counter: state.counter + 1 }; //new state here
//     }
//     return state;
// }