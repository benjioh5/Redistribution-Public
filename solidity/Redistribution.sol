pragma solidity >=0.4.25 <0.6.0;

contract Redistribution {
    event Vote(uint32 answer, address user);

    function vote(uint32 answer) public {
        emit Vote(answer, msg.sender);
    }
}
