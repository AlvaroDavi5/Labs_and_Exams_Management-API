'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('exam_lab', [
			{ id: 1, lab_id: 1, exam_id: 1 },
			{ id: 2, lab_id: 1, exam_id: 2 },
			{ id: 3, lab_id: 1, exam_id: 4 },
			{ id: 4, lab_id: 1, exam_id: 11 },
			{ id: 5, lab_id: 4, exam_id: 2 },
			{ id: 6, lab_id: 4, exam_id: 3 },
			{ id: 7, lab_id: 4, exam_id: 4 },
			{ id: 8, lab_id: 4, exam_id: 5 },
			{ id: 9, lab_id: 4, exam_id: 11 },
			{ id: 10, lab_id: 5, exam_id: 6 },
			{ id: 11, lab_id: 5, exam_id: 7 },
			{ id: 12, lab_id: 6, exam_id: 8 },
			{ id: 13, lab_id: 6, exam_id: 9 },
			{ id: 14, lab_id: 7, exam_id: 10 }
		], {})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('exam_lab', null, {})
	}
}
