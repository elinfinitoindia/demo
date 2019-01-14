import { InsertDataModule } from './insert-data.module';

describe('BlankPageModule', () => {
    let blankPageModule: InsertDataModule;

    beforeEach(() => {
        blankPageModule = new InsertDataModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
