module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("games", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        apiId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    
    return Game;
};