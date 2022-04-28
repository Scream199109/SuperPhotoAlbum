"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Photos", [
      {
        name: "cat",
        link: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cat",
        link: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cat",
        link: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cat",
        link: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cat",
        link: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cat",
        link: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "cat",
        link: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Василий",
        link: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Руслан",
        link: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Коля",
        link: "/img/imgAlbum/photo2.jpg",
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Саша Клуб",
        link: "/img/imgAlbum/photo1.jpg",
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Игорь",
        link: "/img/imgAlbum/photo3.jpg",
        albumId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Елизавета",
        link: "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        albumId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
