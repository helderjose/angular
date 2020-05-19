import { INCREMENT } from './actions';
import { tassign } from 'tassign';

// imports desse exemplo
import { Map } from 'immutable';

export interface IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
}

//Map<string, any>
export function rootReducer(state: Map<string, any>, action): Map<string, any> {
    switch (action.type) {
        case INCREMENT:
            // state.counter++; //esse exemplo impede alterar a variável diretamente dessa forma
            return state.set('counter', state.get('counter') + 1);
    }
    return state;
}