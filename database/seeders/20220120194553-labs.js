'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('labs', [
			{
				id: 1,
				name: "S.T.A.R. Labs",
				address: "Centrtal City",
				status: 1
			},
		], {})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('labs', null, {})
	}
}
