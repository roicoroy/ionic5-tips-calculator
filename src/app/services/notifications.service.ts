import { Injectable } from "@angular/core";
import { ToastController, LoadingController, PopoverController } from "@ionic/angular";
import { PopoverComponent } from '../components/popover/popover.component';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {

    loaderToShow: any;

    constructor(
        private toastController: ToastController,
        public loadingController: LoadingController,
        public popoverController: PopoverController
    ) { }
    showLoader(message) {
        this.loaderToShow = this.loadingController.create({ message: message })
            .then(res => res.present());
    }
    hideLoader() {
        this.loadingController.dismiss();
    }
    public async presentToast(error) {
        const toast = await this.toastController.create({
            message: error,
            position: 'bottom',
            duration: 8000,
        });
        toast.present();
        console.warn(error.message);
    }
    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            event: ev,
            translucent: true
        });
        return await popover.present();
    }
}