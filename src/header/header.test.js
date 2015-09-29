export default ngModule => {
    describe(`header testing`, () => {
        beforeEach(window.module(ngModule.name));

        it(`should test properly`, () => {
            expect(true).to.be.true;
        });
    });
};