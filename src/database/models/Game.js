module.exports = (sequelize, dataTypes) => {
    let alias = 'Games';

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          title: {
            type: dataTypes.STRING(60),
            allowNull: false
          },
          description: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          descriptionMedium: {
            type: dataTypes.STRING(600),
            allowNull: false
          },
          descriptionBig: {
            type: dataTypes.STRING(400),
            allowNull: false
          },
          price: {
            type: dataTypes.DECIMAL(50, 2),
            allowNull: false
          },
          video: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          launch_date: {
            type: dataTypes.DATE(),
            allowNull: false
          },
          editor: {
            type: dataTypes.STRING(50),
            allowNull: false
          },
          classification: {
            type: dataTypes.STRING(1),
            allowNull: false
          },
          rating: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
          },
          stock_user: {
              type: dataTypes.INTEGER(100),
              allowNull: false
          },
          stock_admin: {
            type: dataTypes.INTEGER(100),
            allowNull: false
        }
    };

    let config = {
        tableName: 'games',
    };

    const Game = sequelize.define(alias, cols, config);

    Game.associate = function (models) {
      Game.belongsToMany(models.Genres, {
        as: 'genres',
        through: 'games_genres',
        foreignKey: 'id_game',
        otherKey: 'id_genre',
        timestams: true
      });

      Game.belongsToMany(models.Users, {
        as: 'users',
        through: 'games_users',
        foreignKey: 'id_game',
        otherKey: 'id_user',
        timestams: true
      });

      Game.belongsToMany(models.Transactions, {
        as: 'transactions',
        through: 'games_transactions',
        foreignKey: 'id_game',
        otherKey: 'id_transaction',
        timestams: true
      });

      Game.hasMany(models.User_sales, {
        as: 'user_sales',
        foreignKey: "id_game"
      });

    };

    return Game;
}