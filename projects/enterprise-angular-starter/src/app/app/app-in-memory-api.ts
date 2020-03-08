import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequestInfo } from 'angular-in-memory-web-api/interfaces'
// import local from 'assets/i18n/en.json';
// const local = require('assets/i18n/en.json');

export class InAppService implements InMemoryDbService {

    public createDb() {
        console.log('Creating DB');
      
        const authenticate = [{
            id: 1,
            country: 'USA',
            id_token: 'token',
            code: 'USA'
        }];

        const account = {
            id : 42,
            login : 'bdonald',
            firstName : 'Bill',
            lastName : 'Donald',
            email : 'j_kesineni@yahoo.co.in',
            imageUrl : null,
            activated : true,
            langKey : 'en',
            createdBy : 'anonymousUser',
            createdDate : '2019-06-10T01:43:39Z',
            lastModifiedBy : 'bdonald',
            lastModifiedDate : '2019-06-10T01:45:42Z',
            authorities : [ 'ROLE_USER', 'ROLE_ADMIN' ]
        }

       const companyDetails =  [ {
            id : 2,
            unitName : 'IOT Chip Ltd',
            unitCode : 'IOT_01',
            unitImageUrl : 'http://google.com',
            divisonCode : 'IOT_CHIP_DIV',
            geoLocation : {
              id : 2,
              cityCode : 'SantaClara',
              cityName : 'SantaClara',
              country : 'USA'
            }
          }, {
            id : 12,
            unitName : 'IOT Locks Ltd',
            unitCode : 'IOT_02',
            unitImageUrl : 'http://google.com',
            divisonCode : 'IOT_CHIP_DIV',
            geoLocation : {
              id : 12,
              cityCode : 'NewJersey',
              cityName : 'New Jersey',
              country : 'USA'
            }
          }, {
            id : 32,
            unitName : 'IOT Group',
            unitCode : 'IOT_GROUP',
            unitImageUrl : 'http://iotgroup.com',
            divisonCode : 'IOT_GROUP_DIV',
            geoLocation : {
              id : 2,
              cityCode : 'SantaClara',
              cityName : 'Santa Clara',
              country : 'USA'
            }
          }, {
            id : 42,
            unitName : 'IOT Medical Equipment ',
            unitCode : 'IOT_03',
            unitImageUrl : 'http://google.com',
            divisonCode : 'IOT_DIV_03',
            geoLocation : {
              id : 2,
              cityCode : 'Losangels',
              cityName : 'Los Angels',
              country : 'USA'
            }
          } ]

         const balanceSheetHeading = [ {
            id : 2,
            code : 'IOT_ASSETS',
            name : 'Assets'
          }, {
            id : 12,
            code : 'IOT_EQUITY_LIABILITY',
            name : 'Equity and Liabilities'
          } ]

          const balanceSheetSubHeading = [ {
            id : 2,
            code : 'IOT_SUB_HEAD_NON_CURRENT_ASSETS',
            name : 'Non Current Assets',
            heading : {
              id : 2,
              code : 'IOT_ASSETS',
              name : 'Assets'
            }
          }, {
            id : 12,
            code : 'IOT_SUB_HEADING_CURRENT_ASSETS',
            name : 'Current Assets',
            heading : {
              id : 2,
              code : 'IOT_ASSETS',
              name : 'Assets'
            }
          }, {
            id : 22,
            code : 'IOT_SUB_HEADING_OWNERS_EQUITY',
            name : ' Owners Equity',
            heading : {
              id : 12,
              code : 'IOT_EQUITY_LIABILITY',
              name : 'Equity and Liabilities'
            }
          }, {
            id : 32,
            code : 'IOT_SUB_NON_CURR_LIABILITY',
            name : 'Non-Current Liabilities',
            heading : {
              id : 12,
              code : 'IOT_EQUITY_LIABILITY',
              name : 'Equity and Liabilities'
            }
          }, {
            id : 42,
            code : 'IOT_SUB_HEAD_CURR_LIABILITY',
            name : ' Current Liabilities',
            heading : {
              id : 12,
              code : 'IOT_EQUITY_LIABILITY',
              name : 'Equity and Liabilities'
            }
          } ]

          const divisions = [ {
            id : 2,
            code : 'IOT_LOCK_AND_MEDICAL_DIV',
            name : 'IOT Locks and Medical Division'
          }, {
            id : 12,
            code : 'IOT_SCHOOL_DIV',
            name : 'IOT Schools Divison'
          }, {
            id : 22,
            code : 'IOT_BUILDING_DIV',
            name : 'IOT Construction Division'
          } ]

          const getEmployeeProfileById = [{
            id : 42,
            userId : 42,
            userImageUrl : 'http://google.com',
            unit : {
              id : 2,
              unitName : 'IOT Locks Ltd',
              unitCode : 'IOT_01',
              unitImageUrl : 'http://google.com',
              divisonCode : 'IOT_CHIP_DIV',
              geoLocation : {
                id : 2,
                cityCode : 'SantaClara',
                cityName : 'Santa Clara',
                country : 'USA'
              }
            },
            designation : {
              id : 2,
              code : 'ACCOUNTANT',
              name : 'Accountant'
            }
          }]

          const balanceSheets = [ {
            id : 2,
            lineItem : 'Property, Plant and Equipment',
            splitAllowed : 'true',
            code : 'BSAFA',
            formula : '(BSAFA)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'june 22 19',
            heading : 'Assets',
            subHeading : 'Non Current Assets'
          }, {
            id : 12,
            lineItem : 'Capital Work-in-progress',
            splitAllowed : 'true',
            code : 'BSACWIP',
            formula : '(BSACWIP)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'june 22 19',
            heading : 'Assets',
            subHeading : 'Non Current Assets'
          }, {
            id : 22,
            lineItem : 'Intangible Assets',
            splitAllowed : 'true',
            code : 'BSAIA',
            formula : '(BSAIA)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'June 22 19',
            heading : 'Assets',
            subHeading : 'Intangible Assets'
          }, {
            id : 32,
            lineItem : 'Long Term Loans and Advances',
            splitAllowed : 'true',
            code : 'BSALTLA',
            formula : '(BSALTLA)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'June 22nd 19',
            heading : 'Assets',
            subHeading : 'Long Term Loans and Advances'
          }, {
            id : 42,
            lineItem : 'Deferred Tax Assets',
            splitAllowed : 'true',
            code : 'BSADTA',
            formula : '(BSADTA)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'June 22 19',
            heading : 'Assets',
            subHeading : 'Deferred Tax Assets'
          }, {
            id : 52,
            lineItem : 'Other Non Current Assets',
            splitAllowed : 'true',
            code : 'BSAONCA',
            formula : '(BSAONCA)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'June 22 19',
            heading : 'Assets',
            subHeading : ' Other Non Current Assets'
          }, {
            id : 62,
            lineItem : 'Inventories',
            splitAllowed : 'true',
            code : 'BSAINV',
            formula : '(BSAINV)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'june 22 19',
            heading : 'Assets',
            subHeading : 'Current Assets'
          }, {
            id : 72,
            lineItem : 'Accounts Receivable',
            splitAllowed : 'true',
            code : 'BSAAR',
            formula : '(BSAAR)',
            modifiedBy : 'jana',
            lastModifiedOn : 'June 22 19',
            heading : 'Assets',
            subHeading : 'Current Assets'
          }, {
            id : 82,
            lineItem : 'Due from Related parties',
            splitAllowed : 'true',
            code : 'BSARP',
            formula : '(BSARP)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'June 22 19',
            heading : 'Assets',
            subHeading : 'Current Assets'
          }, {
            id : 92,
            lineItem : 'Cash and bank',
            splitAllowed : 'true',
            code : 'BSACB',
            formula : '(BSACB)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'june 22 19',
            heading : 'Assets',
            subHeading : 'Current Assets'
          }, {
            id : 102,
            lineItem : 'Short-term loans and advances',
            splitAllowed : 'true',
            code : 'BSASTLA',
            formula : '(BSASTLA)',
            modifiedBy : 'jana',
            lastModifiedOn : 'june 22 19',
            heading : 'Assets',
            subHeading : 'Current Assets'
          }, {
            id : 112,
            lineItem : 'Other Current Assets/Deposits',
            splitAllowed : 'true',
            code : 'BSAOCAD',
            formula : '(BSAOCAD)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'June 22 19',
            heading : 'Assets',
            subHeading : 'Current Assets'
          }, {
            id : 122,
            lineItem : 'Share Capital',
            splitAllowed : 'true',
            code : 'BSESC',
            formula : '(BSESC)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'June 22 19',
            heading : 'Equity and Liabilities',
            subHeading : 'Owners Equity'
          }, {
            id : 132,
            lineItem : 'Retained Earnings',
            splitAllowed : 'true',
            code : 'BSERE',
            formula : '(BSERE)',
            modifiedBy : 'Jana',
            lastModifiedOn : 'June 22 19',
            heading : 'Equity and Liabilities',
            subHeading : 'Owners Equity'
          } ]
          
          const getAllbalanceSheetSchedulesByMonthAndyearAndUnitCode = [
                {
                 id: 1 
                }
          ]
        return { authenticate , account, companyDetails, balanceSheetHeading, balanceSheetSubHeading, 
                  divisions, getEmployeeProfileById, balanceSheets, getAllbalanceSheetSchedulesByMonthAndyearAndUnitCode };

    }

    // // HTTP POST interceptor
    // post(reqInfo: RequestInfo) {
            
    //     // if client pinged api/authentication
    //     //  then call authenticate (defined below)
    //     if (reqInfo.collectionName === 'authenticate')
    //         return this.authenticate(reqInfo)
        
    //     //  otherwise default response of In-memory DB
    //     return undefined
    // }

    // // mocking authentication happens here
    // // HTTP POST interceptor handler
    // private authenticate(reqInfo: RequestInfo) {

    //     // return an Observable response
    //     return reqInfo.utils.createResponse$(() => {
    //         console.log('HTTP POST api/authentication override')

    //         const { headers, url, req } = reqInfo

    //         // if request username and passord are correct
    //         //  return response with a JSONWebToken
    //         const { username, password } = req['body']
    //         if (username === 'jkesineni' && password === 'jkesineni')
    //             return { 
    //                 status: 200, 
    //                 headers, // reqInfo (line 30)
    //                 url, // reqInfo (line 30)
    //                 body: { 
    //                     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    //                 } 
    //             }

    //         //  otherwise return response with status code 401 (unauthorized)
    //         return { 
    //             status: 401, 
    //             headers, 
    //             url, 
    //             body: { } 
    //         }
    //     })
    // }
}