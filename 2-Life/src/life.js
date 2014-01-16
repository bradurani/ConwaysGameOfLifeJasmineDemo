function isLivingCellAliveNextPeriod(numSurroundingAlive)
{
    return numSurroundingAlive == 2 || numSurroundingAlive == 3;
}

function isDeadCellAliveNextPeriod(numSurroundingAlive)
{
    return numSurroundingAlive == 3;
}

function getNumSurroundCellsAlive(matrix, y, x)
{
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
}

function isCellAliveNextPeriod(matrix, y, x)
{
    var numSurroundingAlive = getNumSurroundCellsAlive(matrix, y, x);
    return matrix[y][x] ? isLivingCellAliveNextPeriod(numSurroundingAlive) : isDeadCellAliveNextPeriod(numSurroundingAlive);
}

function getNextPeriod(matrix)
{

}