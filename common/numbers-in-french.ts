import { roundToBase } from './utils';

/**
 * Count in French to 60
 */

let numbersToWords: {[key: number]: string} = {
    0: 'zéro',
    1: 'une',
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

export default function spellTheNumber(aNumber: number): string[] {
    if (numbersToWords.hasOwnProperty(aNumber))  {
        return [numbersToWords[aNumber]]
    } else {
        const roundedDown = roundToBase(aNumber);
        const out = [...spellTheNumber(roundedDown)]
        const modulo = aNumber % roundedDown;
        if (modulo == 1) out.push('et')
        return out.concat(spellTheNumber(modulo))
    }
}
