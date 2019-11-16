import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {MercadoService} from '../services/mercado.service'
import { cotizacionCereal } from '../cotizacionCereal';
import {Mercado} from '../models/cotizacionCereal'



@Component({
  selector: 'app-cotizacion-cereal',
  templateUrl: './cotizacion-cereal.component.html',
  styleUrls: ['./cotizacion-cereal.component.css']
})
export class CotizacionCerealComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'id_Cereal','precio'];
  data: cotizacionCereal[] = [];
  mercadoData:Mercado[] =[]
  isLoadingResults = true;

  constructor(private api: ApiService,private mercadoApi:MercadoService) { }

  ngOnInit() {
    this.mercadoApi.getAll()
    .subscribe(res=>{this.mercadoData=res;console.log(this.mercadoData)},err=>{console.log(err)});
    
    this.api.getPizarraCereal("001")
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
