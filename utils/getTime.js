const getTime = () => {
    let now = new Date();
    let date = new Date(now.getTime() - (now.getTimezoneOffset() * 60000))

    return date.toLocaleTimeString();
}

module.exports = getTime;
