const { Model, DataTypes } = require('sequelize')


class Exams extends Model {
	static init(connection) {
		super.init(
			{
				name: DataTypes.STRING(150),
				type: DataTypes.STRING(50),
				status: DataTypes.BOOLEAN
			},
			{
				sequelize: connection,
				tableName: 'exams',
				modelName: 'Exams'
			}
		)
	}

	static associate(models) {

		this.belongsTo(models.ExamLab,
			{
				constraint: true,
				foreignKey: 'exam_id',
				targetKey: 'id',
				as: 'exam'
			}
		)
	}
}


module.exports = Exams
