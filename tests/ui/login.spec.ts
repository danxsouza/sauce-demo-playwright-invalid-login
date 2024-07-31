import { test } from '../fixture/myFixtures';
import  userData from '../data/user-data';

test.use({ storageState: undefined }); //doesn't share the logged in session

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Login with Page Object Model', () => {

    for(const invalidUserType in userData.invalidUser){
        test(`failing login for ${invalidUserType}`, async ({ loginPage}) => {
            const invalidUsername = userData.invalidUser[invalidUserType];
            await loginPage.login(invalidUsername, 'secret_sauce');
            await loginPage.checkInvalidCredentials(invalidUserType);
        });
    }


});