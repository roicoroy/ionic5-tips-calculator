export interface Waiter {
    name: string;
    hours: number;
    tips?: Tips;
}
export interface Tips {
    amount: number;
}
export interface Week {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
}
export class WaiterClass {
    create(event: { name: string; hours?: number; tips?: Tips }) {
        return { name: event.name, hours: event.hours, tips: event.tips };
    }
}
export class TipsClass {
    create(event: { amount?: string }) {
        return { amount: event.amount };
    }
}
export class WeelClass {
    create(event: {
        monday?: string; tuesday?: string; wednesday?: string; thursday?: string; friday?: string; saturday?: string; sunday?: string
    }) {
        return {
            monday: event.monday, tuesday: event.tuesday, wednesday: event.wednesday, thursday: event.thursday, friday: event.friday, saturday: event.saturday, sunday: event.sunday
        };
    }
}
