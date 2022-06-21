'use strict';

// Reusable Description
const description = "Run it up the flag pole spinning our wheels. This is not the hill i want to die on digital literacy yet dear hiring manager: yet run it up the flagpole, ping the boss and circle back so service as core &innovations as power makes our brand globalize."

const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Variants', [
      { id: 1, name: 'With sponsors', slug: 'with-sponsors', description, price: 60.00, productId: 1, inventory: 2, createdAt, updatedAt  },

      { id: 2, name: 'Without sponsors', slug: 'without-sponsors', description, price: 70.00, productId: 1, inventory: 24, createdAt, updatedAt  },

      { id: 3, name: 'Short sleeved', slug: 'short-sleeved', description, price: 25.00, productId: 2, inventory: 0, createdAt, updatedAt  },

      { id: 4, name: 'Long sleeved', slug: 'long-sleeved', description, price: 30.00, productId: 2, inventory: 10, createdAt, updatedAt  }
    ])
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Variants', null, {})
  }
};