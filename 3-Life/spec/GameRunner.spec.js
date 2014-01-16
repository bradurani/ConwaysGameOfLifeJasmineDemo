describe("Runs Conway's Game of Life", function()
{
   var runner;
   var rulesEngine;

    beforeEach(function() {
        rulesEngine = new RulesEngine;
        runner = new GameRunner(rulesEngine);
        spyOn(rulesEngine,"isCellAliveNextPeriod").andReturn(-1);
    });

    it("gets the next period given the current period", function() {
        var input = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        var expectedOutput = [[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]];
        var result = runner.getNextPeriod(input);
        expect(rulesEngine.isCellAliveNextPeriod).toHaveBeenCalled;
        expect(rulesEngine.isCellAliveNextPeriod.calls.length).toEqual(16);
        expect(result).toEqual(expectedOutput);
    });

});