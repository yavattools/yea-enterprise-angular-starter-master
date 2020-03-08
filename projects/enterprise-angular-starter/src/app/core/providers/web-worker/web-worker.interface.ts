export interface IWebWorkerService {
  start<T>(wfunction: (input: any) => T, data?: any): Promise<T>;
  startUrl(url: string, data?: any): Promise<any>;
  stop<T>(promise: Promise<T>): Promise<T>;
  getWorker(promise: Promise<any>): Worker;
}
