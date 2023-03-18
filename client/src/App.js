import './App.css';
import React, {  useEffect } from 'react';
const {ethers} =require("ethers")

function App() {
  const walletAddress = "0xae7e7173ef76736c4755f24d315c0c5803412e08"
 
 
  useEffect(()=>{
    const walletabi=[
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_address",
            "type": "address"
          }
        ],
        "name": "accountBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getValue",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "senEtherContract",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "sendEtherUser",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_num",
            "type": "uint256"
          }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
  
    const writeContract = async()=>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //request to for metamask
      await provider.send("eth_requestAccounts",[])
      const signer = provider.getSigner();
      const  contract = new ethers.Contract(walletAddress,walletabi,signer);
    //await contract.setValue(2); 
     //await contract.senEtherContract({ value: ethers.utils.parseEther("0.01") });
     await contract.sendEthUser("0xf865d9FA63D1FbD85F0B0764854c9424F54e31Bc", {
      value: ethers.utils.parseEther("0.001"),
    });
      
  }
    writeContract();
  },[]);
 
  return (
 <div className="App">
      
    </div>
  );
}

export default App;
