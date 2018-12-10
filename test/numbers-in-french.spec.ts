import * as assert from 'assert'
import 'mocha'

import numbersInFrench from '../common/numbers-in-french'

describe('French numbers', () => {
    describe('direct mappings', () => {
        it('output correct number for 0', () => {
            const number = numbersInFrench(0)
            assert.deepEqual(number, ['zéro'])
        });
        it('output correct number for 1', () => {
            const number = numbersInFrench(1)
            assert.deepEqual(number, ['une'])
        });
        it('output correct number for 2', () => {
            const number = numbersInFrench(2)
            assert.deepEqual(number, ['deux'])
        });
        it('output correct number for 3', () => {
            const number = numbersInFrench(3)
            assert.deepEqual(number, ['trois'])
        });
        it('output correct number for 4', () => {
            const number = numbersInFrench(4)
            assert.deepEqual(number, ['quatre'])
        });
        it('output correct number for 5', () => {
            const number = numbersInFrench(5)
            assert.deepEqual(number, ['cinq'])
        });
        it('output correct number for 6', () => {
            const number = numbersInFrench(6)
            assert.deepEqual(number, ['six'])
        });
        it('output correct number for 7', () => {
            const number = numbersInFrench(7)
            assert.deepEqual(number, ['sept'])
        });
        it('output correct number for 8', () => {
            const number = numbersInFrench(8)
            assert.deepEqual(number, ['huit'])
        });
        it('output correct number for 9', () => {
            const number = numbersInFrench(9)
            assert.deepEqual(number, ['neuf'])
        });
        it('output correct number for 10', () => {
            const number = numbersInFrench(10)
            assert.deepEqual(number, ['dix'])
        });

        it('output correct number for 11', () => {
            const number = numbersInFrench(11)
            assert.deepEqual(number, ['onze'])
        });
        it('output correct number for 12', () => {
            const number = numbersInFrench(12)
            assert.deepEqual(number, ['douze'])
        });
        it('output correct number for 13', () => {
            const number = numbersInFrench(13)
            assert.deepEqual(number, ['treize'])
        });
        it('output correct number for 14', () => {
            const number = numbersInFrench(14)
            assert.deepEqual(number, ['quatorze'])
        });
        it('output correct number for 15', () => {
            const number = numbersInFrench(15)
            assert.deepEqual(number, ['quinze'])
        });
        it('output correct number for 16', () => {
            const number = numbersInFrench(16)
            assert.deepEqual(number, ['seize'])
        });
        it('output correct number for 20', () => {
            const number = numbersInFrench(20)
            assert.deepEqual(number, ['vingt'])
        });
        it('output correct number for 30', () => {
            const number = numbersInFrench(30)
            assert.deepEqual(number, ['trente'])
        });
        it('output correct number for 40', () => {
            const number = numbersInFrench(40)
            assert.deepEqual(number, ['quarante'])
        });
        it('output correct number for 50', () => {
            const number = numbersInFrench(50)
            assert.deepEqual(number, ['cinquante'])
        });
        it('output correct number for 60', () => {
            const number = numbersInFrench(60)
            assert.deepEqual(number, ['soixante'])
        });
    })
    describe('combined numbers 17.. 29', () => {
        it('output correct number for 17', () => {
            const number = numbersInFrench(17)
            assert.deepEqual(number, ['dix', 'sept'])
        });
        it('output correct number for 18', () => {
            const number = numbersInFrench(18)
            assert.deepEqual(number, ['dix', 'huit'])
        });
        it('output correct number for 19', () => {
            const number = numbersInFrench(19)
            assert.deepEqual(number, ['dix', 'neuf'])
        });
        it('output correct number for 21', () => {
            const number = numbersInFrench(21)
            assert.deepEqual(number, ['vingt', 'et', 'une'])
        });
        it('output correct number for 22', () => {
            const number = numbersInFrench(22)
            assert.deepEqual(number, ['vingt', 'deux'])
        });
        it('output correct number for 23', () => {
            const number = numbersInFrench(23)
            assert.deepEqual(number, ['vingt', 'trois'])
        });
        it('output correct number for 24', () => {
            const number = numbersInFrench(24)
            assert.deepEqual(number, ['vingt', 'quatre'])
        });
        it('output correct number for 25', () => {
            const number = numbersInFrench(25)
            assert.deepEqual(number, ['vingt', 'cinq'])
        });
        it('output correct number for 26', () => {
            const number = numbersInFrench(26)
            assert.deepEqual(number, ['vingt', 'six'])
        });
        it('output correct number for 27', () => {
            const number = numbersInFrench(27)
            assert.deepEqual(number, ['vingt', 'sept'])
        });
        it('output correct number for 28', () => {
            const number = numbersInFrench(28)
            assert.deepEqual(number, ['vingt', 'huit'])
        });
        it('output correct number for 29', () => {
            const number = numbersInFrench(29)
            assert.deepEqual(number, ['vingt', 'neuf'])
        });
    })
});
