'use strict';

// Reusable Description

const description = `Team Liquid is a world renowned professional gaming organization established in 2000. Since our grassroots beginnings as a Battle.net clan and StarCraft community site, we have grown into a multifaceted global company with unparalleled reach in the industry.`

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        name: 'Team Liquid 2022 Jersey', 
        slug: 'team-liquid-2022-jersey', 
        price: 60.00, 
        is_published: true,
        description, createdAt, updatedAt
      },

      { 
        id: 2, 
        name: 'Lets Go Liquid Script Shirt', 
        slug: 'lets-go-liquid-script-shirt', 
        price: 30.00, 
        is_published: true,
        description, createdAt, updatedAt
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {})
  }
};