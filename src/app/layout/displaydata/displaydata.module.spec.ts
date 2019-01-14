import { DisplaydataModule } from './displaydata.module';

describe('DisplaydataModule', () => {
  let displaydataModule: DisplaydataModule;

  beforeEach(() => {
    displaydataModule = new DisplaydataModule();
  });

  it('should create an instance', () => {
    expect(displaydataModule).toBeTruthy();
  });
});
