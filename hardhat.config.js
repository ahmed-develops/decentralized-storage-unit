require("@nomicfoundation/hardhat-toolbox");

const ACCOUNT_PRIVATE_KEY = "312461e94f57396fa0aa84d2b4132b02cf37e8bd93523011d58ba5e6c7e3903b";
const INFURA_API_KEY = "492676198a9b465498b67d996afa9f7a";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ACCOUNT_PRIVATE_KEY]
    },
    zkEVM: {
      url: `https://rpc.public.zkevm-test.net	`,
      accounts: [ACCOUNT_PRIVATE_KEY]
    }
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
