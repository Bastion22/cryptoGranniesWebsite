import { userData } from '../../../userData/userData.js'


// Grab Wallet Image
const walletImageElement = document.getElementById('walletImage')

// Add Event Listener
walletImageElement.addEventListener('click', async () => {

    // Check if Ethereum Provider is Installed
    if (window.ethereum) {

        // Try to Connect Wallet
        try {

            // Request Account Access
            await window.ethereum.request({ method: 'eth_requestAccounts' })

            // Request Accounts
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

            // Check if 1 or More Accounts are Connected
            if (accounts.length > 0) {

                // Save User Address
                userData.userAddress = accounts[0]

                // Get Provider
                const provider = new ethers.providers.Web3Provider(window.ethereum)

                // Get Signer
                const signer = provider.getSigner()

                // Save Signer
                userData.signer = signer
                
                // Update Wallet Image
                walletImageElement.src = 'images/icons/connectedWallet.png'
            }

        // Failed to Connect Wallet
        } catch (error) {

            // Reset Wallet Image
            walletImageElement.src = 'images/icons/connectWallet.png'
        }

    // Ethereum Provider not Installed
    } else {

        // Reset Wallet Image
        walletImageElement.src = 'images/icons/connectWallet.png'
    }
})