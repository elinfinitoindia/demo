import { CreateImagesModule } from './create-images.module';

describe('CreateImagesModule', () => {
  let createImagesModule: CreateImagesModule;

  beforeEach(() => {
    createImagesModule = new CreateImagesModule();
  });

  it('should create an instance', () => {
    expect(createImagesModule).toBeTruthy();
  });
});
