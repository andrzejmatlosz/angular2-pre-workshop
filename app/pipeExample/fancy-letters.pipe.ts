import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
    name: 'fancyLetters',
    pure: false
})
export class FancyLettersPipe implements PipeTransform {
    transform(input: string) {
        let newInput: Array<string> = [];

        for (let i = 0; i < input.length; i++) {
            if (i % 2 == 0) {
                newInput[i] = input[i].toUpperCase();
            } else {
                newInput[i] = input[i].toLowerCase();
            }
        }

        return newInput.join('');
    }
}
