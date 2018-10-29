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
        var todayDate = d.getDate();
        d.setDate(todayDate);
        return d;
    }
}