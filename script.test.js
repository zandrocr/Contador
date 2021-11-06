const rewire = require("rewire")
const script = rewire("./script")
const clic = script.__get__("clic")
// @ponicode
describe("clic", () => {
    test("0", () => {
        let result = clic()
        expect(result).toMatchSnapshot()
    })
})
