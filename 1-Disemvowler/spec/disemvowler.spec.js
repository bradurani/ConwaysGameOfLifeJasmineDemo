

describe("Removes all vowels from a string", function(){
   it("removes all lowercase vowels from a string", function(){
        expect(disemvoweler("Hello world")).toEqual("Hll wrld");
    });

    it("removes all uppercase vowels from a string")
    {
        expect(disemvoweler("AMERICAN EAGLE")).toEqual("MRCN GL");
    }

    it("removes AEIOUaieou", function() {
        expect(disemvoweler("AEIOUaeiou")).toEqual("");
    });

    it("does not modify an empty string", function() {
        expect(disemvoweler("")).toEqual("");
    });

    it("throws an exception on null", function() {
        expect(function() { disemvoweler(null); } ).toThrow(new Error("NULL not allowed"));
    });

    it("Doesn't change a string with no vowels", function() {
        expect(disemvoweler("Mmmm hmmmm")).toEqual("Mmmm hmmmm");
    });

});