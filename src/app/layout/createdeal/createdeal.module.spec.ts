import { CreatedealModule } from './createdeal.module';

describe('CreatedealModule', () => {
  let createdealModule: CreatedealModule;

  beforeEach(() => {
    createdealModule = new CreatedealModule();
  });

  it('should create an instance', () => {
    expect(createdealModule).toBeTruthy();
  });
});
