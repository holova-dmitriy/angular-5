import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './common/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
