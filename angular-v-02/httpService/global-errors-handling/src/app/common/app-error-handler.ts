
import { ErrorHandler } from '@angular/core';

/*
    Pesquise por errorhandler no site angular.io
    Essa classe é um GlobalErrorHandler.
*/
export class AppErrorHandler implements ErrorHandler {
    
    /*
    Implementa handleError de ErrorHandler
    */
    handleError(error) {
        alert("an unexpected error occurred. Msg do app-error-handler.ts");//use toast notificaion em uma aplicação real.
        console.log(error); //crie um log no server.
    }
}