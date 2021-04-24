const mReq = {};
const mRes = { json: jest.fn() };
const mNext = jest.fn();
jest.mock('express', () => ({
    Router: () => ({
        get: (path, callback)=>{
            callback(mReq, mRes, mNext)
        },
    }),
    Response: {
        json: jest.fn(),
    },
}))

describe('[Router] Site Test', () => {
    test('Exports get with getAll', () => {
        require('../route')
        expect(mRes.json).toBeCalledWith({
                     api: "API WORKS WITH GITHUB ACTIONS =)"
        });
    })
})