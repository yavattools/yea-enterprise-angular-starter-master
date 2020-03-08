export class GeoLocation {
  id: string;
  cityCode: string;
  cityName: string;
  country: string;

  constructor(){}
}

export class MonthName{
  abbreviation: string;
  name: string;

  constructor(){}
}

export class Divison{
  id: string;
  name: string;
  code: string;

  constructor(){}
}

export class Unit {
    id: string;
    unitName: string;
    unitCode: string;
    divisonCode: string;
    unitImageUrl: string;
    geoLocation: GeoLocation;

    constructor(){
      this.geoLocation = new GeoLocation();
    }
  }

 

export class LineItem{
    id: string;
    lineItem: string;
    splitAllowed: boolean;
    code: string;
    formula: string;
    modifiedBy: string;
    lastModifiedOn: string;
    heading: string;
    subHeading: string;
    constructor(){}
}

export class FFLineItem{
  id: string;
  heading: string;
  lineItem: string;
  splitAllowed: boolean;
  code: string;
  formula: string;
  modifiedBy: string;
  lastModifiedOn: string;
  constructor(){}
}

export class CurrencyType {  
    id: string;
    name: string;
    symbol: string;
    converionValue: string;

    constructor(){}
  }

  export class HeadItem{
    id: string;
    code: string;
    name: string;
    constructor(){
    }
  }
  export class SubHeadItem{
    id: string;
    code: string;
    name: string;
    heading: HeadItem;
    constructor(){
      this.heading = new HeadItem();
    }
  }
  