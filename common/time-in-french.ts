const timeInFrench = (hours: Number, minutes: Number): {
    time: String
    hour: String
    minute: String
    ampm: String
} => {
    const time = 'time'
    const hour = 'hour'
    const minute = 'minute'
    const ampm = 'ampm'

    return {
        time,
        hour,
        minute,
        ampm,
    }
}

export default timeInFrench