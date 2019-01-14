import { CategoiesModule } from './categoies.module';

describe('CategoiesModule', () => {
  let categoiesModule: CategoiesModule;

  beforeEach(() => {
    categoiesModule = new CategoiesModule();
  });

  it('should create an instance', () => {
    expect(categoiesModule).toBeTruthy();
  });
});
