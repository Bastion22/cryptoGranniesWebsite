
export function loadPngOrGif(grannyImageElement, grannyImageBasePath) {

    // Create Image
    const img = new Image()

    // Set Source To PNG
    img.src = `${grannyImageBasePath}.png`

    // Check if Image is Loaded
    img.onload = () => {

        // Load PNG into Image Element
        grannyImageElement.dataset.src = `${grannyImageBasePath}.png`
    }

    // Image Failed to Load
    img.onerror = () => {

        // Load GIF into Image Element
        grannyImageElement.dataset.src = `${grannyImageBasePath}.gif`
    }

    // Add Lazy Loading
    grannyImageElement.setAttribute('loading', 'lazy')
}