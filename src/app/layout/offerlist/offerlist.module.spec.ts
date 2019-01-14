import { OfferlistModule } from './offerlist.module';

describe('OfferlistModule', () => {
  let offerlistModule: OfferlistModule;

  beforeEach(() => {
    offerlistModule = new OfferlistModule();
  });

  it('should create an instance', () => {
    expect(offerlistModule).toBeTruthy();
  });
});
