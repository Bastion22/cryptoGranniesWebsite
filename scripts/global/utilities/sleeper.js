


export function sleeper(ms) {

    // Return Promise
    return new Promise(resolve => setTimeout(resolve, ms));
}