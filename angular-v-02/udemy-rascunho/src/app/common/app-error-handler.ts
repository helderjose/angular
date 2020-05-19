import { ErrorHandler } from "@angular/core";


/*
- pesquise por "errorhandler" no site do angular
- crie essa classe
- coloque no "providers" do app.module.ts
--------------------
app.module.ts
{ provide: ErrorHandler, useClass: AppErrorHandler }
use a class AppErrorHandler no lugar da ErrorHandler
------------------------

++ testes
- use o delete que usa um id que não existe.
- use a url que não existe

*/
export class AppErrorHandler implements ErrorHandler {
    handleError(error){
        alert("An unexpected error occured.");
        console.log(error);
    }
}