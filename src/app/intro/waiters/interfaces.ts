export class Hero {
    id: number;
    name: string;
    powers: Power[];

    constructor() {
        this.id = 0;
        this.name = '';
        this.powers = [];
    }
}

export class Power {
    id = '';
    name = '';
}

//

export class Waiter {
    id: number;
    name: string;
    points: Points[];

    constructor() {
        this.id = 0;
        this.name = '';
        this.points = [];
    }
}

export class Points {
    id = '';
    criteria = '';
    points = 0;
}
