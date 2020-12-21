const { Model } = require("sequelize/types");

module.exports={
    HOST:"localhost",
    USER:"ROOT",
    PASSWORD:"password",
    DB:"game-night",
    dialect: "mysql",
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
};