import { AbstractControl, ValidationErrors } from '@angular/forms';


/*
    Se tiver vários validators que podem ser usado em vários componetes, crie em
    app/common/validators
*/
export class UsernameValidators {

    static shouldBeUnique(control: AbstractControl) : ValidationErrors | null {

        //simula uma chamada ao server
        setTimeout(() => {
            if(control.value === 'mosh')
                return { shouldBeUnique: true };
            
            return null;
        }, 2000);

        return null; //cuidado, o validador nunca vai dar erro por causa dessa linha, ver próximo exemplo
    }


    // para baixo é do exemplo anterior
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };

            //retornando complex object
            // return {
            //     minlength: {
            //         requiredLength: 10,
            //         actualLength: control.value.length
            //     }
            // }

        return null;
    }
}