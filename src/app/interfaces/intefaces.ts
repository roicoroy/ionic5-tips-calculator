export interface TipsCalculator {
    id: number,
    time_from: Date,
    time_to: Date,
    tips_will_receive: string,
    waiter: {
        id: number,
        first_name: string,
        last_name: string,
        tip?: number
    },
    puntuactions: [
        {
            id: number,
            criteria: string,
            points: string,
            tip?: number,
        },
    ]
}
export interface TipsToday {
    id: number,
    tipsAmount: string
}

export interface Puntuactions {
    id: number,
    criteria: string,
    points: string
}