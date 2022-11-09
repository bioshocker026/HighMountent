/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Иван Иванов',
        email: 'ivanov@mail.ru',
        password: '$2b$10$gC87D.7JwQA6cwhpyuYaLOz29fyjTvlxdKkTOZWqAjdco/50TTBlm',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Юля Юлина',
        email: 'ulya@ya.ru',
        password: '$2b$10$gdCvhF999euj2Co6iSbA/uhM7WPLKNhJ5/dvTjWXwD8SgqhLOtM5.',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Dima',
        email: 'bioshocker026@gmail.com',
        password: '$2b$10$8/pRIJ1UejeK7nzUAHyxCuxM8r.Sxq7WK6a1jq5AYCYkChHWk.lpi',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
