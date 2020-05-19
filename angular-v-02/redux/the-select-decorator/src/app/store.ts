import { INCREMENT } from './actions';

export interface IAppState {
    counter: number;
    /*
        marcou como opcional só para esse exemplo.
        Não está usando messaging, foi só para mostrar as formas de acessar
        a variável com o decorator @select no app.component.ts
    */
    messaging?: {
        newMessages: number;
    }
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
    messaging: {
        newMessages: 5
    }
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT: return { counter: state.counter + 1 };
    }
    return state;
}