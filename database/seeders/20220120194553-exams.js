'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('exams', [
			{
				id: 1,
				name: "Accelerated Metabolism",
				type: "clinical analysis",
				status: true
			}
		], {})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('exams', null, {})
	}
}
