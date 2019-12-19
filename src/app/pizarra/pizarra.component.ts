import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {MercadoService} from '../services/mercado.service'
import { cotizacionCereal } from '../cotizacionCereal';
import {Mercado, pizarraCereal} from '../models/cotizacionCereal';
import { DatePipe } from '@angular/common';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
  styleUrls: ['./pizarra.component.css']
})
export class PizarraComponent implements OnInit {
  data: cotizacionCereal[] = [];
  mercadoData:Mercado[] =[]
  isLoadingResults = true;
  pizarraData:pizarraCereal=new pizarraCereal();  

  constructor(private api: ApiService,private mercadoApi:MercadoService) { }

  ngOnInit() {
    
    this.mercadoApi.getAll()
    .subscribe(res=>{this.mercadoData=res;let id_mercado: string = this.mercadoData[0].id;this.getPizarra(id_mercado);console.log(this.mercadoData)},err=>{console.log(err)});
      }

  getPizarra(id_mercado)
  {
    this.api.getPizarraCereal(id_mercado)
    .subscribe(res => {
      this.data = res;
      this.transformData(res);
      console.log(this.data);
      this.isLoadingResults = false;      
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });  
  }
  transformData(data:cotizacionCereal[])
  {
     this.pizarraData.id_mercado = data.find(d=>d.id_Cereal=="23").id_Mercado;
     this.pizarraData.fecha = new Date();
     //this.pizarraData.fecha = new Date(); //data.find(d=>d.id_Cereal=="23").fecha;
     this.pizarraData.soja = data.find(d=>d.id_Cereal=="23").precio;
     this.pizarraData.maiz = data.find(d=>d.id_Cereal=="19").precio;
     this.pizarraData.sorgo = data.find(d=>d.id_Cereal=="22").precio;
     this.pizarraData.girasol = data.find(d=>d.id_Cereal=="02").precio;
     this.pizarraData.trigo = data.find(d=>d.id_Cereal=="15").precio;
  }
  onSave()
  {
    var cotizacion:cotizacionCereal = new cotizacionCereal();
    let id:string  = uuid();
    cotizacion.id = id.substr(0,10);
    cotizacion.id_Cereal = "23";
    cotizacion.id_Mercado = this.pizarraData.id_mercado;
    cotizacion.id_Moneda = "PES";
    cotizacion.precio = this.pizarraData.soja;
    cotizacion.fecha = this.pizarraData.fecha;
    this.api.insert(cotizacion).subscribe();
//Maiz
    cotizacion = new cotizacionCereal();
    id = uuid();
    cotizacion.id = id.substr(0,10);
    cotizacion.id_Cereal = "19";
    cotizacion.id_Mercado = this.pizarraData.id_mercado;
    cotizacion.id_Moneda = "PES";
    cotizacion.precio = this.pizarraData.maiz;
    cotizacion.fecha = this.pizarraData.fecha;
    this.api.insert(cotizacion).subscribe();
    //Trigo
    cotizacion = new cotizacionCereal();
    id = uuid();
    cotizacion.id = id.substr(0,10);
    cotizacion.id_Cereal = "15";
    cotizacion.id_Mercado = this.pizarraData.id_mercado;
    cotizacion.id_Moneda = "PES";
    cotizacion.precio = this.pizarraData.trigo;
    cotizacion.fecha = this.pizarraData.fecha;
    this.api.insert(cotizacion).subscribe();
    //girasol
    cotizacion = new cotizacionCereal();
    id = uuid();
    cotizacion.id = id.substr(0,10);
    cotizacion.id_Cereal = "02";
    cotizacion.id_Mercado = this.pizarraData.id_mercado;
    cotizacion.id_Moneda = "PES";
    cotizacion.precio = this.pizarraData.girasol;
    cotizacion.fecha = this.pizarraData.fecha;
    this.api.insert(cotizacion).subscribe();
    //sorgo
    cotizacion = new cotizacionCereal();
    id = uuid();
    cotizacion.id = id.substr(0,10);
    cotizacion.id_Cereal = "22";
    cotizacion.id_Mercado = this.pizarraData.id_mercado;
    cotizacion.id_Moneda = "PES";
    cotizacion.precio = this.pizarraData.sorgo;
    cotizacion.fecha = this.pizarraData.fecha;
    this.api.insert(cotizacion).subscribe();




  }
  

}
