require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name raise saddle provide hunt hen olympic sure'; 
let testAccounts = [
"0x445e4a62b8972c96f5c18a0166a058f296d3c6e2fc552b93b35e36e155c5dd6d",
"0x179539d12d92af95a5cf1bf9fbbc8fa16a56e3135e97df0b57f17294d1c049f1",
"0x840cd8961093b550f132dbd2341218ca595b83b7a86525bce486903ead693498",
"0xbe5fb9e02b0551431fdcc7bf487041fff983c1ae1725ec665a17c26ef2541916",
"0xc1a9ebd6bf70ce29bf95820bc15666b66b47387d65cecaf6c769e20c1355e390",
"0x1ac1fb4622e4f062b54d2a95e7d524e47a5e7a02b4e6961728d3e26af31249e2",
"0xaf914e1ed961b245228fe2328cb8171bf4d95faf3a48aeafd7b596917b152eb2",
"0xd8eedcd95ac798c7f09f32eadfcd432a4035fa792810de65423abb8e375c3a8f",
"0x6e4f19dd88bb5011c98e3f256e16a41a83da7431f30e1a42d6027f8bddd0fb94",
"0x3c9f08da53f31048624b6aa885fb9c832fb5686981e76a61a35471f846a73dbd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

