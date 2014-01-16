

describe("Does basic algebra", function() { //Use 'describe' to start a suite

    it("adds 2 numbers", function() {      //Use 'it' to start a spec
        expect(add(256, 256)).toEqual(512); //toEqual is a matcher, it uses === comparison
    });

    it("subtracts 2 numbers", function() {
       expect(subtract(512, 256)).toEqual(256)
    });


});