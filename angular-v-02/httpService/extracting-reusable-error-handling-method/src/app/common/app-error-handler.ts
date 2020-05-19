
import { ErrorHandler } from '@angular/core';

// pesquise por errorhandler no site angular.io
export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert("an unexpected error occurred. Msg do app-error-handler.ts");//use toast notificaion em uma aplicação real.
        console.log(error);
    }
}