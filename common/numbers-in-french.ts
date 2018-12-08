import { roundToBase } from './utils';

let numbersToWords: {[key: number]: string} = {
    0: 'zéro',
    1: 'un',
    2: 'deux',
    3: 'trois',
    4: 'quatre',
    5: 'cinq',
    6: 'six',
    7: 'sept',
    8: 'huit',
    9: 'neuf',
    10: 'dix',
    // ---- //
    11: 'onze',
    12: 'douze',
    13: 'treize',
    14: 'quatorze',
    15: 'quinze',
    16: 'seize',
    // ---- //
    20: 'vingt',
    30: 'trente',
    40: 'quarante',
    50: 'cinquante',
    60: 'soixante'
}

export function spellTheNumber(aNumber: number): string[] {
    if (numbersToWords.hasOwnProperty(aNumber))  {
        return [numbersToWords[aNumber]]
    } else {
        const roundedDown = roundToBase(aNumber);
        const modulo = aNumber % roundedDown;
        return [...spellTheNumber(roundedDown), ...spellTheNumber(modulo)]
    }
}
