function disemvowel(str)
{
    if(str == null)
        throw "string must be populated";
    return str.replace(/a|e|i|o|u/gi, "");
}