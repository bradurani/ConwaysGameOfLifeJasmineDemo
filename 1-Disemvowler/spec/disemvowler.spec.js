

describe("Removes all vowels from a string", function(){
   it("throws an exception when given null", function() {
       expect(disemvowel(null)).toThrow("string must be populated");
    });
   it("removes lowercase vowels", function() {
       expect(disemvowel("american eagle")).toEqual("mrcn gl");
   });
    it("removes uppercase vowels", function() {
       expect(disemvowel("HEY THERE")).toEqual("HY THR");
    });
    it("removes all vowels", function(){
       expect(disemvowel("AEIOUaeiou")).toEqual("");
    });
    it("returns blank string when given blank string", function(){
        expect(disemvowel("")).toEqual("");
    });
    it("does not remove symbols", function(){
        expect(disemvowel("@#$&@#^&$^")).toEqual("@#$&@#^&$^");
    });
});