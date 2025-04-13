import { userData } from '../../userData/userData.js'

import { instagranContractAddress } from '../../contracts/Instagran/instagranContractAddress.js'
import { instagranContractABI } from '../../contracts/Instagran/instagranContractABI.js'

export async function likeGranny(grannyId) {

    // Try to Like Granny
    try {

        // Create Contract Object for Signer
        let contractObjectForSigner = new ethers.Contract(instagranContractAddress, instagranContractABI, userData.signer)

        // Send Transaction
        let transaction = await contractObjectForSigner.likeGranny(grannyId)

        // Wait for TX to be Mined
        await transaction.wait()

        // Return True
        return true
    
    // Transaction Failed
    } catch (error) {

        // Return False
        return false
    }
}