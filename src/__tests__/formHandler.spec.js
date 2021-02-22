const handleSubmit = require('../client/js/formHandler');

describe('handleSubmit tests' , () => {
    it('should be defined', async () => {
        expect(handleSubmit).toBeDefined();
    });

    it('should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});

