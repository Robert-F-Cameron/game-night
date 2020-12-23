module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define("game_groups", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
        }
    });
    
    return Group;
};