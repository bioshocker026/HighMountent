const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CheckBox extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  CheckBox.init({
    answer1: DataTypes.BOOLEAN,
    answer2: DataTypes.BOOLEAN,
    answer3: DataTypes.BOOLEAN,
    answer4: DataTypes.BOOLEAN,
    answer5: DataTypes.BOOLEAN,
    answer6: DataTypes.BOOLEAN,
    answer7: DataTypes.BOOLEAN,
    answer8: DataTypes.BOOLEAN,
    answer9: DataTypes.STRING,
    answer10: DataTypes.BOOLEAN,
    answer11: DataTypes.BOOLEAN,
    answer12: DataTypes.BOOLEAN,
    answer13: DataTypes.BOOLEAN,
    mentor: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    workerName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CheckBox',
  });
  return CheckBox;
};
