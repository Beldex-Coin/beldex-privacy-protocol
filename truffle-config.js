const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "satisfy hood record monitor invite custom crop repair roast chronic dust seven unhappy flip today involve zebra void romance laundry rule change degree below";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777"
    },
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
      network_id: 3,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    BSCTestnet: {
      provider: () => new HDWalletProvider("1d69967a6bd08a0d1380dac548943768e383569ce126a7694050bd90741a3efc", `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      gas: 5500000,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: "^0.7.6"
    }
  },
  db: {
    enabled: false
  }
};
