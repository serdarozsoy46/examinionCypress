import { Homepage } from "../../pageObjectModel/homePage";
const homepagePom = new Homepage()


describe('Page Object Model Kullanimi', () => {
    it('Page object model kullanim ornekleri', () => {
        homepagePom.navigate()
    });

});