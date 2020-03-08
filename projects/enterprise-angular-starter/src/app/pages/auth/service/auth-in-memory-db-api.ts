import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InAuthenticateService implements InMemoryDbService {

  public createDb() {
    console.log('Creating DB');
    const authenticate = {
      auth: true,
      id: 1,
      token: 'token',
      grant: 'all'
    };

    return {authenticate};

  }
}