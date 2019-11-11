import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CotizacionCereal } from '../cotizacionCereal';



@Component({
  selector: 'app-cotizacion-cereal',
  templateUrl: './cotizacion-cereal.component.html',
  styleUrls: ['./cotizacion-cereal.component.css']
})
export class CotizacionCerealComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'id_Cereal','precio'];
  data: CotizacionCereal[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    //this.api.getCotizacionCereal()
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
