



export function createRandomIndexArray(arrayLength) {

    // Create Array for Indexes
    let indexArray = []

    // Iterate Over Index Length
    for (let newIndex = 0; newIndex < arrayLength; newIndex++) {

        // Push Index to Array
        indexArray.push(newIndex)
    }

    // Loop Over index Array
    for (let currentIndex = indexArray.length - 1; currentIndex > 0; currentIndex--) {

        // Generate Random Index within Array
        const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

        // Swap Current Index with Random Index
        [indexArray[currentIndex], indexArray[randomIndex]] = [indexArray[randomIndex], indexArray[currentIndex]]
    }

    // Return Random Index Array
    return indexArray
}