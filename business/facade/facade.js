'use strict';

const BaseCore = require('../../core/base-core');
const NftComponent = require('../components/nft/nft-component'); 

class Facade extends BaseCore {

    constructor() {
        super();

        this._nftComponent = new NftComponent; 
    }

    // NFTs
    async updateNft(id, nft) {
        return this._nftComponent.updateNft(id, nft);
    }
    async addNft(nft) {
        return this._nftComponent.addNft(nft);
    }

    async delNft(id) {
        return this._nftComponent.delNft(id);
    }

    async getDetailNft(id) {
        return this._nftComponent.getDetailNft(id);
    }
    async getListNFTs() {
        return this._nftComponent.getListNFTs();
    }
}

module.exports = Facade;
