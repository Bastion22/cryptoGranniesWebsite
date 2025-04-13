pragma solidity ^0.8.0;

// author: backside.

import "@openzeppelin/contracts/access/Ownable.sol";

contract Instagran is Ownable {

    // Specify Like Fee
    uint256 public likeFee;

    // Mapping to Keep track of Likes
    mapping(uint256 => uint256) public likesPerGrannyId;

    // Constructor to Set Initial Like Fee
    constructor(uint256 initialLikeFee) {

        // Set Like Fee
        likeFee = initialLikeFee;
    }

    // Function to Like Granny With
    function likeGranny(uint256 grannyId) external payable {

        // Check if Like Fee is Above Zero
        if (likeFee > 0) {

            // Require the Like Fee to be Sent
            require(msg.value == likeFee, 'You need to Send the sufficient *likeFee* in ETH');
        }

        // Update Like Amount
        likesPerGrannyId[grannyId] += 1;
    }

    // Function for Owner to Update Like Fee With
    function updateLikeFee(uint256 updatedLikeFee) external onlyOwner {

        // Update Like Fee
        likeFee = updatedLikeFee;
    }

    // Function for Owner to Withdraw Like Fees with
    function withdrawLikeFees() external onlyOwner {

        // Get Contract Balance
        uint256 balance = address(this).balance;

        // Require Balance to be Above Zero
        require(balance > 0, "Contract holds Zero ETH");

        // Transfer Accumulated Like Fees to owner
        payable(owner()).transfer(balance);
    }

    // Function to Request Multiple Grannies Likes
    function returnGranniesLikes(uint256[] calldata grannyIds) external view returns (uint256[] memory, uint256[] memory) {

        // Create Array to Store Granny IDs in Memory
        uint256[] memory grannyIdsToReturn = new uint256[](grannyIds.length);

        // Create Array to Store Granny Likes in Memory 
        uint256[] memory grannyLikesToReturn = new uint256[](grannyIds.length);

        // Loop Over Array by Index
        for (uint256 arrayIndex = 0; arrayIndex < grannyIds.length; arrayIndex++) {

            // Grab Granny ID By Index
            uint256 grannyId = grannyIds[arrayIndex];

            // Grab Granny Likes
            uint256 grannyLikes = likesPerGrannyId[grannyId];

            // Add Granny Id to the Array in Memory
            grannyIdsToReturn[arrayIndex] = grannyId;

            // Add Granny Likes to the Array in Memory
            grannyLikesToReturn[arrayIndex] = grannyLikes;
        }

        // Return Both Arrays
        return(grannyIdsToReturn, grannyLikesToReturn);
    }
}