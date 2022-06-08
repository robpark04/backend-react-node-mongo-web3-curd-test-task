"use strict";

const BaseCore = require("../../../core/base-core");
const NftEntity = require("../../entities/mongodb/nft-entity"); 


class NftComponent extends BaseCore {
    constructor() {
        super();

        this._nftEntity = new NftEntity;
    }

    async getListNFTs() {

        let nfts = await this._nftEntity.list();
        return nfts;
    }


    async getDetailNft(id) {
        if (!id) {
            throw {
                message: "Invalid input"
            }
        }

        let nft = await this._nftEntity.findById(id);
        return nft;
    }

    async updateNft(id, nft) {
        if (!nft) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._nftEntity.update(id, nft);

        if (!result) {
            throw {
                message: "An occurs err"
            }
        }

        return result;
    }
    async addNft(nft) {
        if (!nft) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._nftEntity.add(nft);

        if (!result) {
            throw {
                message: "An occurs err"
            }
        }

        return result;
    }
    async delNft(id) {
        if (!id) {
            throw {
                message: "Invalid input"
            }
        }

        let nft = await this._nftEntity.findById(id);

        if (!nft) {
            throw {
                message: "Nft does not exist"
            }

        }

        await this._nftEntity.remove(id);
        return true;
    }

}

module.exports = NftComponent;
