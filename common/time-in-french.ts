import numbersInFrench from '../common/numbers-in-french'

const timeInFrench = (hours: number, minutes: number): {
    time: string
    hoursSpelled: string
    hoursVerbatim: string
    minutesSpelled: string
    when: string
} => {
    // Il est ___ heure(s)___.
    const shortHours = (hours % 12) || 12
    const hoursVerbatim = shortHours === 1 ? 'heure' : 'heures'
    const time = 'Il est'
    const hoursSpelled = numbersInFrench(shortHours).join('-')
    const minutesSpelled = numbersInFrench(minutes).join('-')

    let when = 'du matin'
    if (hours >= 12) when = 'de l’après-midi'
    if (hours >= 18) when = 'du soir'

    return {
        time,
        hoursSpelled,
        hoursVerbatim,
        minutesSpelled,
        when,
    }
}

export default timeInFrench