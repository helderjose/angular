import { AbstractControl, ValidationErrors } from "@angular/forms";

/*
- pesquise por "validatorfn" no site do angular
- crie o arquivo username.validators.ts
- pesquise por "validationerr" no site do angular
- use UsernameValidators.cannotContainSpace no component
- no signup-form.component.html olhe a linha que usa o cannotContainSpace (campo name)

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
}