  export class Cereal {
      id: string;
      Nombre: string;
  }

  export class Mercado {
      id: string;
      nombre: string;
  }

  export class cotizacionCereal {
      cereal: Cereal;
      mercado: Mercado;
      id: string;
      fecha: Date;
      id_Cereal: string;
      id_Mercado: string;
      id_Moneda: string;
      precio: number;
      obs?: string;
  }


