'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('exam_lab', [
			{
				id: 1,
				exam_id: 1,
				lab_id: 1
			}
		], {})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('exam_lab', null, {})
	}
}
