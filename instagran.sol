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
    function likeGranny(grannyId) external payable {

        // Require the Like Fee to be Sent
        require(msg.value == likeFee, 'You need to Send the sufficient *likeFee* in ETH');

        // Update Like Amount
        likesPerGrannyId[grannyId] += 1;
    }

    // Function for Owner to Update Like Fee With
    function updateLikeFee(updatedLikeFee) external onlyOwner {

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
}