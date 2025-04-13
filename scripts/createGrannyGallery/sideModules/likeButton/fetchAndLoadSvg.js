


export async function fetchAndLoadSvg(grannyIndex, likeIconContainer) {

    // Fetch SVG
    let svgResponse = await fetch('images/icons/likeEmpty.svg')

    // Parse SVG
    let svgAsset = await svgResponse.text()

    // Add SVG Asset to Like Icon Container
    likeIconContainer.innerHTML = svgAsset

    // Grab Path Element inside SVG
    let svgPath = likeIconContainer.querySelector('path')

    // Check if Path is Present
    if (svgPath) {

        // Make sure All of the SVG is Sensitive to Pointer Events
        svgPath.setAttribute('pointer-events', 'all')

        // Add Cursor pointer to SVG Path
        svgPath.style.cursor = 'pointer';

        // Add Class Name
        svgPath.classList.add('likeIconButton')

        // Add ID
        svgPath.id = `granny${grannyIndex}`

        // Return SVG Path
        return svgPath

    // SVG Path not Present
    } else {

        // Return False
        return false
    }
}