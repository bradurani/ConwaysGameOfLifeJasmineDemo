

describe("Tests Jasmine Equality Matchers", function() {

    /**
     * The .toEqual matcher
     */
    it("Demonstrates the toEqual() matcher", function() {
        expect(1).not.toEqual(true);  //uses === for primatives
    });

    it("Demonstrates the toEqual() matcher with objects", function() {
        var firstDog = {
            species: "Poodle",
            name: "Fluffy"
        };
        var secondDog = {
            species: "Poodle",
            name: "Fluffy"
        };
        expect(firstDog).toEqual(secondDog); //uses deep comparison for objects
    });


    /**
     * The .toBe matcher
     */
    it("Demonstrates toBe() matcher equality", function() {
        var myArray = [1,2,3];
        expect(myArray).toBe(myArray); //uses ===
    });

    it("Demonstrates toBe() matcher inequality", function() {
        var a = [1,2,3];
        var b = [1,2,3];
        expect(a).not.toBe(b); //uses ===
    });


    /**
     * toBeTruthy()
     */
    it("Demonstrates toBeTruthy() matcher equality", function() {
        expect(true).toBeTruthy();
        expect(12).toBeTruthy();
        expect({}).toBeTruthy()
    });

    /**
     * tobeFalsy()
     */
    it("Demonstrates toBeFalsy() matcher equality", function() {
        expect(false).toBeFalsy();
        expect(0).toBeFalsy();
        expect("").toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
        expect(NaN).toBeFalsy();
    });


    /**
     * jasmine.Any()
     */
    it("Demonstrates jamine.any() type equality", function() {
        expect(Math.random()).toEqual(jasmine.any(Number));
        expect({ foo: "bar" }).toEqual(jasmine.any(Object));
    });

    /**
     * see also
     * toBeDefined()
     * toBeNull()
     * toBeNan()
     */

});