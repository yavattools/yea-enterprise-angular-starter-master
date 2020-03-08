import { AnimationsService } from './animations.service';

describe('AnimationsService', () => {
  let service: AnimationsService;

  beforeEach(() => {
    service = new AnimationsService();
  });

  it('It should set route animation type to "NONE" by default', () => {
    expect(AnimationsService.isRouteAnimationsType('NONE')).toBe(true);
  });

  it('It should set route animation type to "ALL"', () => {
    service.updateRouteAnimationType(true, true);
    expect(AnimationsService.isRouteAnimationsType('ALL')).toBe(true);
  });

  it('It should set route animation type to "PAGE"', () => {
    service.updateRouteAnimationType(true, false);
    expect(AnimationsService.isRouteAnimationsType('PAGE')).toBe(true);
  });

  it('It should set route animation type to "ELEMENTS"', () => {
    service.updateRouteAnimationType(false, true);
    expect(AnimationsService.isRouteAnimationsType('ELEMENTS')).toBe(true);
  });
});
