import { IWebWorkerService } from './web-worker.interface';

export class WebWorkerBaseService implements IWebWorkerService {
  private promise2WorkerMap = new WeakMap<Promise<any>, Worker>();
  private workerFunction2UrlMap = new WeakMap<Function, string>();

  start<T>(wfunction: (input: any) => T, data?: any): Promise<T> {
    const url = this.getOrInitiateWorkerUrl(wfunction);
    return this.startUrl(url, data);
  }

  startUrl(url: string, data?: any): Promise<any> {
    const worker2Start = new Worker(url);
    const promise = this.createPromiseForWorker(worker2Start, data);
    const promiseCleaner = this.createPromiseCleaner(promise);

    this.promise2WorkerMap.set(promise, worker2Start);

    promise.then(promiseCleaner).catch(promiseCleaner);

    return promise;
  }

  stop<T>(promise: Promise<T>): Promise<T> {
    return this.clearPromise(promise);
  }

  getWorker(promise: Promise<any>): Worker {
    return this.promise2WorkerMap.get(promise);
  }

  private createPromiseForWorker<T>(worker: Worker, data: any) {
    return new Promise<T>((resolve, reject) => {
      worker.addEventListener('error', reject);
      worker.addEventListener('message', event => resolve(event.data));
      worker.postMessage(data);
    });
  }

  private getOrInitiateWorkerUrl(fn: Function): string {
    if (!this.workerFunction2UrlMap.has(fn)) {
      const url = this.createWorkerUrl(fn);
      this.workerFunction2UrlMap.set(fn, url);
      return url;
    }
    return this.workerFunction2UrlMap.get(fn);
  }

  private createWorkerUrl(resolve: Function): string {
    const resolveString = resolve.toString();
    const webWorkerMessageTemplate = `
            self.addEventListener('message', function(e) {
                postMessage((${resolveString})(e.data));
            });
        `;
    const blob = new Blob([webWorkerMessageTemplate], {
      type: 'text/javascript'
    });
    return URL.createObjectURL(blob);
  }

  private createPromiseCleaner<T>(promise: Promise<T>): (param: any) => T {
    return event => {
      this.clearPromise(promise);
      return event;
    };
  }

  private clearPromise<T>(promise: Promise<T>): Promise<T> {
    const worker2Clear = this.promise2WorkerMap.get(promise);

    if (worker2Clear) {
      worker2Clear.terminate();
    }
    this.promise2WorkerMap.delete(promise);

    return promise;
  }
}
