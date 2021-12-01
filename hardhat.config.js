require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    kovan: {
      url: `${process.env.ALCHEMY_KOVAN_URL}`,
      accounts: [`0x${process.env.KOVAN_PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `${process.env.ALCHEMY_RINKEBY_URL}`,
      accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`],
    } 
  }
};