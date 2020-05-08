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

export interface WaitersList {
    first_name: string,
    last_name: string
}

export interface WaiterObj {
    id?: number
    hours_worked: number,
    waiter: {
        id: number,
        first_name: string,
        last_name: string,
        waiter_obj: string,
        created_at: string,
        updated_at: string
    },
    created_at: Date,
    updated_at: Date,
    points_awardeds: [
        {
            id: string,
            criteria: string,
            points: string,
        }
    ]
}