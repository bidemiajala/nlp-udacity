const validURL=  require('../client/js/urlChecker');


describe('URL checker tests' , () => {
    it('should be defined', async () => {
        expect(validURL).toBeDefined();
    });

    it('should be a function', async () => {
        expect(typeof validURL).toBe("function");
    });

    test('should validate urls', async () => {
        const urls = [
            'www.udacity.com',
            'https://udacity.com',
            'udacity.com/path',
            'https://www.udacity.com',
            'http://udacity.com',
            'udacity.com',
        ];

        urls.forEach(url => {
            expect(validURL(url)).toBeTruthy;
        });
    });

    test('should throw error for invalid url', async () => {
        expect(validURL('udacity.')).toBeFalsy();
    });
});

