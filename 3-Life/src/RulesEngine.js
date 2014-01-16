var RulesEngine = function(){};

RulesEngine.prototype._isLivingCellAliveNextPeriod = function(numSurroundingAlive) {
    return numSurroundingAlive == 2 || numSurroundingAlive == 3;
};

RulesEngine.prototype._isDeadCellAliveNextPeriod = function(numSurroundingAlive) {
    return numSurroundingAlive == 3;
};

RulesEngine.prototype._getNumSurroundingCellsAlive = function(matrix, y, x) {
    count = 0;
    for (var vert = y - 1; vert <= y + 1; vert++)
    {
        var vertToTest = vert
        if (vert == matrix.length)
            vertToTest = 0;
        else if(vert == -1)
            vertToTest = matrix.length - 1;
        for(var hor = x - 1; hor <= x + 1; hor++)
        {
            var horToTest = hor
            if (hor == matrix[vertToTest].length)
                horToTest = 0;
            else if(hor == -1)
                horToTest = matrix[vertToTest].length - 1;
            if( vertToTest == y && horToTest == x) //don't count yourself
                continue;
            count += matrix[vertToTest][horToTest];
        }
    }
    return count;
};

RulesEngine.prototype.isCellAliveNextPeriod = function(matrix, y, x) {
    var numSurroundingAlive = this._getNumSurroundingCellsAlive(matrix, y, x);
    return matrix[y][x] ? this._isLivingCellAliveNextPeriod(numSurroundingAlive) : this._isDeadCellAliveNextPeriod(numSurroundingAlive);
};
