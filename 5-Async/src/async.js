var GameRunner = function(rulesEngine) {
    this.current = null;
    this.rulesEngine = rulesEngine;
};

 GameRunner.prototype._getNextPeriod = function(currentPeriod) {
    var result = [];
    for(var y = 0; y < currentPeriod.length; y++) {
        result[y] = [];
        for(var x = 0; x < currentPeriod[y].length; x++) {
            console.log(x,y);
            result[y][x] = this.rulesEngine.isCellAliveNextPeriod(currentPeriod, y, x);
        }
    }
     return result;
};

GameRunner.prototype.next = function()
{
    this.current = this._getNextPeriod(this.current);
    return this.current;
}

GameRunner.prototype.setStartingMatrix(matrix)
{
    this.current = matrix;
}