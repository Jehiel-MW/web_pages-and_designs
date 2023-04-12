function newYear() {
    let date = new Date()
    let myYear = date.getFullYear()
    if(myYear) {
        myYear = myYear + 1
    }
    return myYear
}

function monthAway(){
    let date = new Date()
    let presentMonth = date.getMonth()
    let monthToCome = newYear() - presentMonth
    if(monthToCome > presentMonth) {
        monthTocome = monthToCome - 1
    }
    return monthToCome
}
monthAway()
