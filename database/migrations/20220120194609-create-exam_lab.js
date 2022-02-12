'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('exam_lab', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true
			},
			exam_id: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			lab_id: {
				type: Sequelize.INTEGER,
				allowNull: false
			}
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('exam_lab')
	}
}