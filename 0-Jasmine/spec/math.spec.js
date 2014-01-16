

describe("Does basic algebra", function() { //SUITE - a collection of tests, one per file tested

    it("adds 2 numbers", function() {      //SPEC - Tests a single condition, never more
        expect(add(256, 256)).toEqual(512); //EXPECTATION and MATCHER - Compares result with expected value
    });

    it("subtracts 2 numbers", function() {
       expect(subtract(512, 256)).toEqual(256)
    });


});