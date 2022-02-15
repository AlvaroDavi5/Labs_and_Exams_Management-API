'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('exams', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false,
				unique: true,
				primaryKey: true
			},
			name: {
				type: Sequelize.STRING(150),
				allowNull: false
			},
			type: {
				type: Sequelize.STRING(50),
				allowNull: false
			},
			status: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: new Date()
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: new Date()
			}
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('exams')
	}
}
