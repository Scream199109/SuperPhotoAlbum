"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Albums", [
      {
        title: "Cats",
        private: false,
        userId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Stars",
        private: false,
        userId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Nature",
        private: false,
        userId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dogs",
        private: false,
        userId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
