import { INCREMENT } from './actions';

// imports desse exemplo
import { tassign } from 'tassign';

export interface IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT:

            // state.counter++; //no próximo exemplo será mostrado como impedir esse tipo de alteração

            // versao com o tassign
            return tassign(state, { counter: state.counter + 1 });


            // return { counter: state.counter + 1 }; //primeira versao

            /*
            assign -> We can combine multiple objects into one object. Merging objects
            Com assign colocamso a variável "isOnLine" quebrando a regra da interface que só
            tem a variável "counter".

            versao com assign
            */
            // return Object.assign({}, state, { counter: state.counter + 1, isOnLine: true });

    }
    return state;
}