/**
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
function getCharactersNames(chars) {
    return chars.map(char => char.name);
}

/**
 * print (console.log) ids of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
    chars.forEach(char => console.log(char.name));
}

/**
 * return an array of non-human characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    return chars.filter(char => (char.species !== "Human"));
}

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    return  chars.filter(char => (char.name === 'Jerry Smith'))[0];
}

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    return  chars.map(char => char.species).every(species => species === "Human");
}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    return chars.map(char => char.type).some(species => species === "Fish-Person");
}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 */
function minItem(arr) {
    return arr.indexOf(Math.min(...arr));
}

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem
};
