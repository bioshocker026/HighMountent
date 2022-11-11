/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CheckBoxes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      answer1: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer3: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer4: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer5: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer6: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer7: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer8: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer9: {
        type: Sequelize.STRING,
      },
      answer10: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer11: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer12: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      answer13: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      mentor: {
        type: Sequelize.STRING,
      },
      workerName: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CheckBoxes');
  },
};
