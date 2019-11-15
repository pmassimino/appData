export class cotizacionCereal {
    cereal: Cereal;
    mercado: Mercado;
    id: string;
    fecha: string;
    id_Cereal: string;
    id_Mercado: string;
    id_Moneda: string;
    precio: number;
    obs?: string;
  }
  
  export class Mercado {
    id: string;
    nombre: string;
  }
  
  export class Cereal {
    id: string;
    Nombre: string;
  }