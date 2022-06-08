"use strict";
const axios = require("axios");

const BaseController = require("../../core/base-controller");
const Util = require("../../helpers/util");


class NftController extends BaseController {

    constructor() {
        super();

        this.list = this.list.bind(this);
        this.detail = this.detail.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }


    async list(req, res) {

        try {
            let data = await this._facade.getListNFTs();
            return this._handleResult(data, res);

        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }

    }

    async detail(req, res) {
        try {
            let id = req.params.id.trim();
            let data = await this._facade.getDetailNft(id);

            return this._handleResult(data, res);


        } catch (error) {
            this._handleError(error.message, res);
        }
    }

    async create(req, res) {
        try {
            if (this._handleValidationResult(req, res)) {
                return false;
            }

            const { filename } = req.file;

            let nft = {
                name: req.body.name,
                description: req.body.description,
                image: filename,
            };

            let data = await this._facade.addNft(nft);

            this._handleResult(data, res);
        } catch (error) {
            console.log(error);
            this._handleError({
                code: 500,
                message: error.message
            }, res);
        }
    }

    async update(req, res) {
        try {
            if (this._handleValidationResult(req, res)) {
                return false;
            }
            console.log(req.body.id);

            const { filename } = req.file;

            let nft = {
                id: req.body.id,
                name: req.body.name,
                description: req.body.description,
                image: filename,
            };

            let data = await this._facade.updateNft(nft.id, nft);

            this._handleResult(data, res);
        } catch (error) {
            this._handleError(error.message, res);
        }
    }

    async delete(req, res) {
        const id = Object.values(req.query)[0];
        try {
            const nft = await this._facade.getDetailNft(id);

            if (!nft) {
                return this._handleError('Nft does not exist', res);
            }

            let data = await this._facade.delNft(id);
            this._handleResult(data, res);
        } catch (error) {
            this._handleError(error.message, res);
        }

    }

}

module.exports = NftController;