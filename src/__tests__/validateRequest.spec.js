const requestPost = require('../server/handleRequest')
const httpMocks = require('node-mocks-http');
const validateRequest = requestPost.validateRequest;

describe('handle request tests', () => {
    it('should be defined', async () => {
        expect(validateRequest).toBeDefined();
    });

    it('It should be a function', async () => {
        expect(typeof validateRequest).toBe("function");
    });

    it('throw error for incorrect url', () => {
        const next = jest.fn();
        const req = httpMocks.createRequest({
            body: {
                url: "https://www.udacity.com"
            }
        });
        const res = httpMocks.createResponse();
        validateRequest(req, res, next);
        expect(res.statusCode).toBe(400);
        expect(res._isJSON()).toBeTruthy();
        const json = JSON.parse(res._getData());
        expect(json.message).toBe('Invalid input');
    });
});
