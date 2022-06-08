'use strict';


class Util {

    static generateUuid() {
        const uuidv4 = require('uuid/v4');
        return uuidv4();
    }

    static generateImageName(filename, mimetype) {
        switch (mimetype) {
            case 'image/jpeg':
                return `${filename}.jpg`;
                break;
            case 'image/png':
                return `${filename}.png`;
                break;
            default:
                return filename;
                break;
        }

    }

}

module.exports = Util;
