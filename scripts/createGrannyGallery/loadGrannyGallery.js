
import { createRandomIndexArray } from './sideModules/createRandomIndexArray.js'
import { loadPngOrGif } from './sideModules/loadPngOrGif.js'


// Function to load Crypto Grannies dynamically in random order
function loadGrannyGallery() {

    // Grab Grid
    const grannyGrid = document.getElementById('grannyGrid')

    // Specify Granny Amount
    const grannyAmount = 943

    // Create Random Array Index
    const randomIndexArray = createRandomIndexArray(grannyAmount)

    // Loop over Array of Indexes
    for (let grannyIndex of randomIndexArray) {

        // Create Container Element for Image
        const grannyContainer = document.createElement('div')

        // Add Class for Granny Container
        grannyContainer.classList.add('grannyContainer')

        // Create Image Element
        const grannyImage = document.createElement('img')

        // Add Class for Granny Image
        grannyImage.classList.add('grannyImage')

        // Add Lazy Loading Attribute
        grannyImage.setAttribute('loading', 'lazy')

        // Specify Granny Image Base Path
        let grannyImageBasePath = `images/grannyImages/${grannyIndex}`

        // Set srcset with Multiple image Sizes
        grannyImage.setAttribute('srcset', `${grannyImageBasePath}-500.jpg 500w, ${grannyImageBasePath}-800.jpg 800w, ${grannyImageBasePath}-1000.jpg 1000w`)

        // Specify sizes for Responsive images
        grannyImage.setAttribute('sizes', '(max-width: 500px) 500px, (max-width: 800px) 800px, 1000px')

        // Set the fallback image (largest size)
        grannyImage.setAttribute('src', `${grannyImageBasePath}-1000.jpg`)

        // Load PNG or GIF
        loadPngOrGif(grannyImage, grannyImageBasePath)

        // Append image to the grid item
        grannyContainer.appendChild(grannyImage)

        // Add the grid item to the grid container
        grannyGrid.appendChild(grannyContainer)
    }
}

// Call Function on Page Load
window.onload = loadGrannyGallery
