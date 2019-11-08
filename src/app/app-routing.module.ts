import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizacionCerealComponent } from './cotizacion-cereal/cotizacion-cereal.component';


const routes: Routes = [{
    path: 'cotizacion-cereal',
    component: CotizacionCerealComponent,
    data: { title: 'List of  cotizacion cereal' }
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
