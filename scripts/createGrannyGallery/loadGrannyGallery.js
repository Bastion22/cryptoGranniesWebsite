
import { createRandomIndexArray } from './sideModules/createRandomIndexArray.js'
import { loadPngOrGif } from './sideModules/loadPngOrGif.js'
import { sleeper } from '../global/utilities/sleeper.js'
import { addLikeButtonWithFunctionality } from './sideModules/likeButton/addLikeButtonWithFunctionality.js'

// Function to load Crypto Grannies dynamically in random order
async function loadGrannyGallery() {

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

        // Load PNG or GIF
        loadPngOrGif(grannyImage, grannyImageBasePath)

        // Create a Container for the Like Icon (SVG)
        const likeIconContainer = document.createElement('div')

        // Create a Container for the Loading GIF
        const loadingIconContainer = document.createElement('div')

        // Add Class for Like Container
        likeIconContainer.classList.add('likeIconContainer')

        // Add Class for Loading Container
        loadingIconContainer.classList.add('loadingIconContainer')

        // Add Like Button with Functionality
        await addLikeButtonWithFunctionality(grannyIndex, likeIconContainer, loadingIconContainer)

        // Append Granny image to the grid item
        grannyContainer.appendChild(grannyImage)

        // Append Like Icon (SVG) to the grid item
        grannyContainer.appendChild(likeIconContainer)

        // Append Loading GIF to the grid item
        grannyContainer.appendChild(loadingIconContainer)

        // Add the grid item to the grid container
        grannyGrid.appendChild(grannyContainer)

        // Sleep
        await sleeper(70)

        // Add Loaded Class after Sleep
        grannyContainer.classList.add('loaded')
    }
}

// Call Function on Page Load
window.onload = loadGrannyGallery
