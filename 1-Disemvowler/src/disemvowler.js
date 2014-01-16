function disemvoweler(str)
{
    if(str === null)
        throw new Error("NULL not allowed");
    return str.replace(/a|e|i|o|u/gi, "");
}