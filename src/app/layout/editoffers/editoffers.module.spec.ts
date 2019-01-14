import { EditoffersModule } from './editoffers.module';

describe('EditoffersModule', () => {
  let editoffersModule: EditoffersModule;

  beforeEach(() => {
    editoffersModule = new EditoffersModule();
  });

  it('should create an instance', () => {
    expect(editoffersModule).toBeTruthy();
  });
});
