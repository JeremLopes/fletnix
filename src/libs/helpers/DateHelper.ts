export class DateHelper {
  static dateToString(date: Date): string {
    return date.toLocaleDateString("fr-FR");
  }

  static getMinutesAndHours(totalMinutes: number): {
    hours: string;
    minutes: string;
  } {
    const hours: string = Math.floor(totalMinutes / 60).toString();
    const minutesNumber: number = totalMinutes % 60;
    const minutes: string = minutesNumber < 10 ? `0${minutesNumber}` : minutesNumber.toString();
    return { hours, minutes };
  }
}
