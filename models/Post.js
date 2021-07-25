const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // title: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;