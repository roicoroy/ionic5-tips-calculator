import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { popAnimation } from './animations/animations';
import { TooltipsModule } from './components/ionic4-tooltips/src/tooltips.module';
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'pinch': { enable: false },
    'rotate': { enable: false }
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios',
      // navAnimation: popAnimation
    }),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TooltipsModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
