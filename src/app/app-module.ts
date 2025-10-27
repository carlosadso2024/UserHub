import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CapitalizaNamePipe } from './shared/pipes/capitaliza-name-pipe';
import { FilterByCityPipe } from './shared/pipes/filter-by-city-pipe';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HttpLongerInterceptor } from './core/interceptors/http/logger-interceptor';

@NgModule({
  declarations: [
    App,
    CapitalizaNamePipe,
    FilterByCityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpLongerInterceptor,
    multi: true
  },
  provideBrowserGlobalErrorListeners(),
  provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
