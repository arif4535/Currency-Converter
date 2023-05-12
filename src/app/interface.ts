export interface ICurrencyResponse {
    motd: {
      msg: string;
      url: string;
    };
    success: boolean;
    base: string;
    date: Date;
    rates: {
      [key: string]: number;
    };
  }
  