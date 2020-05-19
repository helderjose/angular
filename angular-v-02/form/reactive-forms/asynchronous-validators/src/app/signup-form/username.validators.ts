import { AbstractControl, ValidationErrors } from '@angular/forms';


/*
    Se tiver vários validators que podem ser usado em vários componetes, crie em
    app/common/validators
*/
export class UsernameValidators {

    //simula uma chamada ao server
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'mosh')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
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