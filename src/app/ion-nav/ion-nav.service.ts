import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IonPages } from './ion-nav-interface';


@Injectable({
    providedIn: 'root'
})
export class IonNavService {

    pages: Array<IonPages> = [
        {
            id: 1,
            route: '/ion-nav/tab1',
            name: 'Home'
        },
        {
            id: 2,
            route: '/ion-nav/tab2',
            name: 'Our Products'
        },
        {
            id: 3,
            route: '/ion-nav/tab3',
            name: 'Our Brand'
        },
        {
            id: 4,
            route: '/ion-nav/tab4',
            name: 'News'
        },
        {
            id: 5,
            route: '/ion-nav/tab5',
            name: 'Game'
        }
    ];

    constructor() { }

    getPages() {
        return this.pages;
    }

    getItemById(id: IonPages['id']) {
        console.log({ id });
        return this.pages.find(item => item.id === id);
    }

    getIndexById(id: IonPages['id']) {
        return this.pages.findIndex(item => item.id === id);
    }

    getPreviousItem(currentItemId) {
        // const currentIndex = this.getIndexById(currentItemId);
        // return this.pages[currentIndex - 1] || null;
        console.log(currentItemId);
    }

    getNextItem(currentItemId) {
        console.log(currentItemId);
        // const currentIndex = this.getIndexById(currentItemId);
        // return this.pages[currentIndex + 1] || null;
    }
}
