//disable backdates and today date
export class DateValidator {
    static getTomorrow() {
        var d = new Date();
        var tomorrowDate = d.getDate() + 1;
        d.setDate(tomorrowDate);
        return d;
    }
    static getToday() {
        var d = new Date();
<<<<<<< HEAD
        var todayDate = d.getDate();
=======
        var todayDate = d.getDate()
>>>>>>> 69ead0639d8bed2ef9a07c2946a576bc00d98d91
        d.setDate(todayDate);
        return d;
    }
}