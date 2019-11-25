import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizacionCerealComponent } from './cotizacion-cereal/cotizacion-cereal.component';
import { PizarraComponent } from './pizarra/pizarra.component';


const routes: Routes = [{
    path: 'cotizacion-cereal',
    component: CotizacionCerealComponent,
    data: { title: 'List of  cotizacion cereal' }
  },
  {
    path: 'pizarra',
    component: PizarraComponent,
    data: { title: 'Pizarra Cereal' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
