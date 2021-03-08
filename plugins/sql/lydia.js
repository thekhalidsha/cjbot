/* Codded by @cyberjeevi
Youtube: Cyber Noob Arena
Instagram: www.instagram.com/its__me_cj
WhatsApp: +15817003192
Github: github.com/cyberjeevi
*/
const config = require('../../config');
const { DataTypes } = require('sequelize');

const LydiaDB = config.DATABASE.define('Lydia', {
    session_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expires: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    users: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = { LydiaDB: LydiaDB };
