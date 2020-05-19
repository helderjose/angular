import { AbstractControl, ValidationErrors } from "@angular/forms";

/*
- pesquise por "validatorfn" no site do angular
- crie o arquivo username.validators.ts
- pesquise por "validationerr" no site do angular
- use UsernameValidators.cannotContainSpace no component
- no signup-form.component.html olhe a linha que usa o cannotContainSpace (campo name)
- pesquise por "asyncvalidato" no site do angular.

Dica: coloque esse validator na pasta do comnponent signup-form porque só vamos usar
esse validator aqui.
Se for um validator que vai ser usado em outras partes da aplicação, deixe em um lugar
comum como "src/app/common/validators"
*/

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {

        if ((control.value as string).lastIndexOf(' ') >= 0)
            return { cannotContainSpace: true };
            // return {
            //     minlength: {
            //         requiredLength: 10,
            //         actualLength: control.value.length
            //     }
            // };
        return null;
    }

    /*
    Asynchronous Operations
    Faz uma chamada ao servidor para validar o nome

    Asynchronous Operations:
        - Calling the server (AJAX);
        - Timer functions
    */
    // simula uma chamada ao server demorando 2 segundos
    // preencha o campo nome com mosh para ver o erro
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'mosh')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}