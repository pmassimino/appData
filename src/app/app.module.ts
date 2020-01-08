import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizacionCerealComponent } from './cotizacion-cereal/cotizacion-cereal.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigService} from './services/config.service';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, 
  MatSelect,
  MatSelectModule} from "@angular/material";
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizarraComponent } from './pizarra/pizarra.component';

export function initializeApp(appConfig: ConfigService) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    CotizacionCerealComponent,
    PizarraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [ConfigService,{ provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [ConfigService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
