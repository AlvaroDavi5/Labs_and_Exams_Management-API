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
				allowNull: false,
				references: {
					model: 'exams',
					key: 'id'
				},
				onUpdate: 'NO ACTION',
				onDelete: 'NO ACTION'
			},
			lab_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'labs',
					key: 'id'
				},
				onUpdate: 'NO ACTION',
				onDelete: 'NO ACTION'
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
		await queryInterface.dropTable('exam_lab')
	}
}
