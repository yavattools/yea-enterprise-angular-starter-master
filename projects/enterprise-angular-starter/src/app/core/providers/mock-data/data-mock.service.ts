import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InCredentialsService implements InMemoryDbService {

  public createDb() {
    console.log('Creating DB');
    const login = {
      auth: true,
      id: 1,
      token: 'token',
      grant: 'all'
    };

    return {login};

  }
}