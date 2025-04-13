
import { userData } from '../../userData/userData.js'


// Grab Wallet Image
const walletImageElement = document.getElementById('walletImage')

// Check if Ethereum Provider is Installed
if (window.ethereum) {

    // Listen for account changes
    window.ethereum.on('accountsChanged', (accounts) => {

        // Check if 1 or More Accounts are Connected
        if (accounts.length > 0) {
            
            // Update Wallet Image
            walletImageElement.src = 'images/icons/connectedWallet.png'

        // No Accounts Connected
        } else {
            
            // Reset Wallet Image
            walletImageElement.src = 'images/icons/connectWallet.png'
        }
    })

    // Try to See if a Wallet is Connected
    try {

        // Get Accounts
        let accounts = await window.ethereum.request({ method: 'eth_accounts' })

        // Check if 1 or More Accounts are Connected
        if (accounts.length > 0) {

            // Get Provider
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            // Get Signer
            const signer = provider.getSigner()

            // Save Signer
            userData.signer = signer
            
            // Save User Address
            userData.userAddress = accounts[0]
            
            // Update Wallet Image
            walletImageElement.src = 'images/icons/connectedWallet.png'

        // No Accounts Connected
        } else {
            
            // Reset Wallet Image
            walletImageElement.src = 'images/icons/connectWallet.png'
        }

    // Failed to Get Ethereum Accounts
    } catch (error) {

        // Reset Wallet Image
        walletImageElement.src = 'images/icons/connectWallet.png'
    }
}