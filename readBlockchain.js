const {ethers} = require("ethers");
const { formatEther } = require("ethers/lib/utils");
const provider = new ethers.providers.JsonRpcProvider(
    'https://mainnet.infura.io/v3/e8c7b4b4dbed447ba661c50a96605413'
)
const querryBlockchain = async () =>{
    // get block number
    const block = await provider.getBlockNumber();
    console.log(block);
// get user balance via address 
    const balance =  await provider.getBalance("0x9206A33abaEFC72D5852fb55FE889bA8e6e98e84")
    console.log(balance);
    console.log(ethers.utils,formatEther(balance));
};
querryBlockchain(); 