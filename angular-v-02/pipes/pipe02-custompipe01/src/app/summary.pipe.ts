import { Pipe, PipeTransform } from '@angular/core';

/*
Pesquise por 'PipeTransform' no https://angular.io
*/
@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {

        if (!value) {
            return null;
        }

        let actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    }
}