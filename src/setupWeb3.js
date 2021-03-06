const Web3 = require('web3')
const Web3HttpProvider = require('web3-providers-http')
const { rpcUrl, privateKey, web3ProviderOptions } = require('../config')

function setup() {
    try {
        const provider = new Web3HttpProvider(rpcUrl, web3ProviderOptions);
        const web3 = new Web3(provider, null, { transactionConfirmationBlocks: 1 })
        const account = web3.eth.accounts.privateKeyToAccount('0x' + privateKey)
        web3.eth.accounts.wallet.add('0x' + privateKey)
        web3.eth.defaultAccount = account.address
        return web3
    } catch (e) {
        console.error('web3 failed', e)
    }
}
const web3 = setup()
module.exports = web3
