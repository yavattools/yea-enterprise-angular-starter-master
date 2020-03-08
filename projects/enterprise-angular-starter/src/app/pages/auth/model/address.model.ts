export interface IaddressParam {
  profileId?: any;
  hospitalId?: any;
  line1?: any;
  line2?: any;
  city?: any;
  country?: any;
  state?: any;
  zipcode?: any;
  primaryAddress?: any;
  emailId?: any;
  location?: any;
  name?: any;
  authToken?: any;
  sessionid?: any;
  contactNumbers?: any;
}
export interface IaddressInfo extends IaddressParam {
  id?: any;
}

export class AddressParam {
  profileId?: any;
  hospitalId?: any;
  line1?: any;
  line2?: any;
  city?: any;
  country?: any;
  state?: any;
  zipcode?: any;
  primaryAddress?: any;
  emailId?: any;
  location?: any;
  name?: any;
  authToken?: any;
  sessionid?: any;
  contactNumbers?: any;

  constructor() {}
}

export class AddressInfo extends AddressParam {
  id?: any;
  constructor() {
    super();
  }
}
