// Code your solution here
function findMatching(drivers, sought) {
return source.filter (
    (possiblematch) => possiblematch.toLowerCase() === sought.toLowerCase()

);

}


function fuzzyMatch(drivers, testString) {
    return source.filter(
        (possibleMatch) =>
        possibleMatch.toLower().indexof(testString.toLowerCase()) === 0
    );
}

function matchName(drivers, soughtName) {
    return driver.filter((record) => record.name === soughName);
}
