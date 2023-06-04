import isEmail from "./isEmail";

describe("is Email?", () => {
    test("renders the isEmail component", () => {
        let email = "hello_email@garuda.co.id"
        let result = isEmail(email)
        expect(result).toBe(true)
    });
    test("renders the isEmail component", () => {
        let email = "hello_email@garuda"
        let result = isEmail(email)
        expect(result).toBe(false)
    });
    test("renders the isEmail component", () => {
        let email = "hello_email@"
        let result = isEmail(email)
        expect(result).toBe(false)
    });
    test("renders the isEmail component", () => {
        let email = "hello_email@123"
        let result = isEmail(email)
        expect(result).toBe(false)
    });
    test("renders the isEmail component", () => {
        let email = "124bro"
        let result = isEmail(email)
        expect(result).toBe(false)
    });
});