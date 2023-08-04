import { useState } from 'react';
import { ethers } from 'ethers';

function WalletBalance() {

  const [balance, setBalance] = useState();

  const getBalance = async () => {

    // 请求账户权限
    let accountList = await window.ethereum.request({ method: "eth_requestAccounts" })
    currentAccount = accountList[0]
    // 注册当前web3驱动到api里面
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    // 或者当前账户的余额
    let balance = await provider.getBalance(currentAccount)
    let balanceText = ethers.utils.formatEther(balance)
    setBalance(balanceText);
    // const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const balance = await provider.getBalance(account);
    // setBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">我的余额: {balance}</h5>
        <button className="btn btn-success" onClick={() => getBalance()}>展示我的钱包金额</button>
      </div>
    </div>
  );
};

export default WalletBalance;