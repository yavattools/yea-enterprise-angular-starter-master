import { Unit } from '@app/core/store/app-util/model/app-common.models';
import { Injectable } from '@angular/core';
import { AddressInfo } from './address.model';
import { SignInInfo } from './auth.model';

export class Designation {
  public id: string;
  public name: string;
  public code: string;

  constructor() {}
}
export class EmployeeProfile {
  public id: string;
  public userId: string;
  public userImageUrl: string;
  public unit: Unit;
  public designation: Designation;

  constructor() {
    this.unit = new Unit();
    this.designation = new Designation();
  }
}

export class ProfileInfo {
  public id: string;
  public activated: boolean;
  public authorities: Array<string>;
  public createdBy: string;
  public createdDate: string;
  public email: string;
  public firstName: string;
  public imageUrl: string;
  public langKey: string;
  public lastModifiedBy: string;
  public lastModifiedDate: string;
  public lastName: string;
  public login: string;
  public gender?: any;

  public assignedUnit: Unit;

  constructor() {
    this.assignedUnit = new Unit();
  }
}

export class Location {
  public addr1?: any;
  public addr2?: any;
  public countryCode?: any;
  public countryName?: any;
  public stateCode?: any;
  public stateName?: any;
  public cityCode?: any;
  public cityName?: any;
  public zipCode?: any;
  public visibleFlag?: any;
  constructor() {}
}

export class PhoneNumber {
  public phoneNumber?: any;
  public type?: any; /* mobile/ landlane / frontdesk */
  public visibleFlag?: any;
  constructor() {}
}

export class Email {
  public emailId?: any;
  public visibleFlag?: any;
  constructor() {}
}

export class ContactInfo {
  public locations: Array<Location>;
  public phoneNumbers: Array<PhoneNumber>;
  public emails: Array<Email>;
  constructor() {
    this.emails = new Array<Email>();
    this.locations = new Array<Location>();
    this.phoneNumbers = new Array<PhoneNumber>();
  }
}

export class UserInfo {
  public login: SignInInfo;
  public userType?: any;
  public role?: any; /* admin/user */
  public activated?: boolean;
  public activationCode?: any;
  public designation?: any;
  public phonenumber?: any;

  public contact: ContactInfo;
  public personal: ProfileInfo;

  constructor() {
    this.login = new SignInInfo();
    this.contact = new ContactInfo();
    this.personal = new ProfileInfo();
  }
}

export class ChildrenProfile {
  public id?: string;
  public firstName?: string;
  public lastName?: string;
  public dob?: any;
  public gender?: any;
  public avatarUrl?: any;
  public parentId: string;

  constructor() {}
}

export interface IgetById {
  id?: any;
}
export class GetById {
  id?: any;
  constructor() {}
}

export class UserName {
  username?: any;
  constructor() {}
}

export interface IuserInfoParam {
  firstname?: string;
  lastname?: string;
  gender?: boolean;
  dob?: any;
  activationCode?: number;
  activated?: boolean;
  emailId?: string;
  username?: string;
  password?: string;
  phonenumber?: string;
  thumbnailUrl?: any;
  imageUrl?: string;
  message?: string;
  fare?: number;
  language?: any;
  authToken?: any;
  sessionid?: number;
  member?: boolean;
  contactnumber?: string;
  logInStatus?: boolean;
}
export class UserInfoParam {
  firstname?: any;
  lastname?: any;
  gender?: boolean;
  dob?: any;
  activationCode?: number;
  activated?: boolean;
  emailId?: string;
  username?: string;
  password?: string;
  phonenumber?: string;
  thumbnailUrl?: any;
  imageUrl?: string;
  Teacher?: number;
  designation?: string;
  message?: string;
  contactnumber?: string;
  constructor() {}
}

export interface IstaffProfileInfo extends IuserInfoParam {
  id?: any;
}

export class StaffProfileInfo extends UserInfoParam {
  id?: any;
  constructor() {
    super();
  }
}

export class StaffProfile {
  id: any;
  firstname?: string;
  lastname?: string;
  gender?: boolean;
  dob?: any;
  doctype?: number;
  activationCode?: number;
  activated?: boolean;
  emailId?: string;
  username?: string;
  password?: string;
  phonenumber?: string;
  thumbnailUrl?: any;
  imageUrl?: string;
  designation?: string;
  message?: string;
  experience?: number;
  fare?: number;
  language?: any;
  authToken?: any;
  sessionid?: number;
  contactnumber?: string;
  constructor() {}
}

export class ProfileFilter {
  public filterValue: string;

  constructor() {}
}

export class OrderFilter {
  public filterValue: string;

  constructor() {}
}

export class Qualification {}

export class FullProfile {
  id?: any;
  profile?: StaffProfileInfo;
  address?: AddressInfo;
  appointments?: Array<any>;

  constructor() {
    this.appointments = new Array();
  }
}

export class UploadImage {
  imageUrl?: any;
  constructor() {}
}

export class ImageParams {
  id?: any;
  name?: any;
  constructor() {}
}

export class File {
  file?: any;
  size?: any;
  constructor() {}
}

export class MessageProfile {
  id: any;
  firstname?: string;
  lastname?: string;
}

export class SelectedVisitorProfile {
  id?: any;
  name?: any;
  imageUrl?: any;
  fname?: any;
  lname?: any;
  dob?: any;
  constructor() {}
}

export class LoginProfile {
  loginUser: ProfileInfo;
  currentUser: ProfileInfo;

  constructor() {
    this.loginUser = new ProfileInfo();
    this.currentUser = new ProfileInfo();
  }
}

export class AccountInfo {
  public userName: string;
  public password: string;
  public loginUserStaffProfile: EmployeeProfile;
  public loginUserUnitProfile: Unit;
  public loginInfo: LoginProfile;

  constructor() {
    this.loginInfo = new LoginProfile();
    this.loginUserStaffProfile = new EmployeeProfile();
    this.loginUserUnitProfile = new Unit();
  }
}
