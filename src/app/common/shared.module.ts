import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContractService} from './services/contract/contract.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpAuthInterceptor} from './utils/http-auth-interceptor/http-auth-interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContractsComponent} from './components/contracts/contracts.component';
import {MaterialModule} from './material.module';
import {SelectInputComponent} from './components/select-input/select-input.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    ContractsComponent,
    SelectInputComponent,
    SpinnerComponent,
    SafeHtmlPipe,
  ],
  exports: [
    ContractsComponent,
    SelectInputComponent,
    SpinnerComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    },
    ContractService
  ]
})

export class SharedModule {
}
