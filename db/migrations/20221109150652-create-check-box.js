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
      },
      answer2: {
        type: Sequelize.BOOLEAN,
      },
      answer3: {
        type: Sequelize.BOOLEAN,
      },
      answer4: {
        type: Sequelize.BOOLEAN,
      },
      answer5: {
        type: Sequelize.BOOLEAN,
      },
      answer6: {
        type: Sequelize.BOOLEAN,
      },
      answer7: {
        type: Sequelize.BOOLEAN,
      },
      answer8: {
        type: Sequelize.STRING,
      },
      answer9: {
        type: Sequelize.BOOLEAN,
      },
      answer10: {
        type: Sequelize.BOOLEAN,
      },
      answer11: {
        type: Sequelize.BOOLEAN,
      },
      answer12: {
        type: Sequelize.BOOLEAN,
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
