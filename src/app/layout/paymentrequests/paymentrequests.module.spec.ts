import { PaymentrequestsModule } from './paymentrequests.module';

describe('PaymentrequestsModule', () => {
  let paymentrequestsModule: PaymentrequestsModule;

  beforeEach(() => {
    paymentrequestsModule = new PaymentrequestsModule();
  });

  it('should create an instance', () => {
    expect(paymentrequestsModule).toBeTruthy();
  });
});
