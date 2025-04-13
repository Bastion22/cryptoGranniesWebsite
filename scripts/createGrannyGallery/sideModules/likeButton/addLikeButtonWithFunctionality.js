
import { fetchAndLoadSvg } from './fetchAndLoadSvg.js'
import { sleeper } from '../../../global/utilities/sleeper.js'
import { likeGranny } from '../../../transactions/likeGranny.js'
// import { sleeper } from '../../../global/utilities/sleeper.js'

export async function addLikeButtonWithFunctionality(grannyIndex, likeIconContainer, loadingIconContainer) {

    // Fetch and Load SVG
    let svgPath = await fetchAndLoadSvg(grannyIndex, likeIconContainer)

    // Add Event Listener to Like Granny
    svgPath.addEventListener('click', async () => {

        // Hide the Like Icon Container
        likeIconContainer.style.visibility = 'hidden'

        // Set Loading GIF
        loadingIconContainer.innerHTML = '<img src="images/icons/loading.gif" class="likeLoadingGif">'

        // Make Gif Visible
        loadingIconContainer.style.opacity = 1

        // Grab Granny ID
        let grannyIdToLike = svgPath.id

        // Manipulate String to Get ID
        grannyIdToLike = grannyIdToLike.slice(6)

        // Initiate Transaction
        let txSucceeded = await likeGranny(grannyIdToLike)

        // Check if TX Succeeded
        if (txSucceeded) {

            // Change to Check
            loadingIconContainer.innerHTML = '<img src="images/icons/check.png" class="grannyLikeSuccess">'

            // Small Sleep
            await sleeper(1650)
        }

        // Make Gif Invisible
        loadingIconContainer.style.opacity = 0

        // Make the Like Icon Container Visibile
        likeIconContainer.style.visibility = 'visible'

        // Small Sleep
        await sleeper(500)
    })
}