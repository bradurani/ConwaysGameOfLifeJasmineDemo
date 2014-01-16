var GameRunner = function(rulesEngine) {
    this.rulesEngine = rulesEngine;
};

 GameRunner.prototype.getNextPeriod = function(currentPeriod) {
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