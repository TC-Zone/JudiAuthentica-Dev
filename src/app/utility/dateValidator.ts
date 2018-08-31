//disable backdates and today date
export class DateValidator {
    static dateValidate() {
        var d = new Date();
        var tomorrowDate = d.getDate() + 1;
        d.setDate(tomorrowDate);
        return d;
    }
}