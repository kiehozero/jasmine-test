describe("fizzBuzz",function() {
    beforeEach(function() {
        drink = new fizzBuzz();
    });
    describe("Number",function() {
        it("should return FizzBuzz",function() {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });
        it("should return Fizz",function() {
            var result = fizzBuzz(18);
            expect(result).toBe("Fizz");
        });
        it("should return Buzz",function() {
            var result = fizzBuzz(20);
            expect(result).toBe("Buzz");
        });
        it("should return 22",function() {
            var result = fizzBuzz(22);
            expect(result).toBe(22);
        });
    });
});