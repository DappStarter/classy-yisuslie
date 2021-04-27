require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom glide fresh tragic name royal place huge inflict globe flock genre'; 
let testAccounts = [
"0x8ee7520c4ae71b89148d2f5c3632ed141028f306fb66e74e06e87307b0b63b52",
"0xcc40e4f4c499139c6965efcd0c62e2ed0c3626cdf8d1fd797509d11cc0a8c8fe",
"0xa25fcb4330261817324010dbba2ad4e858c5b8fb0ee33a9c178cc5e46475067e",
"0x978ecb90853f0203f2f661c131ed98fb23d71e34f614e92728d0579b42e0ad03",
"0x485a1cdc2d058d64afc3326a2113d1e661c3bd58a508c5c573b0d123417aa75f",
"0x9658721a3c4caf336c0cf4437fae0023ba131819e6359a8a300b406f669d03c0",
"0x9433a9480a7060187a50b05ef4d4b30c0845fee9b9761e43cddf9aec8ca068d2",
"0xccd93a9d964530066293e3eca9c4acaf11c9fbc4741f22dcbaac9a8bb9f7f85e",
"0xf480019c95037580f29369012381fc6c33696daff28c4a32cb7da2d10e768c6c",
"0x502bb42f297d5b1642d9d0ce2e101cbcf9ee2808878b444afbce390de8d32032"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

