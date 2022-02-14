const { Model, DataTypes } = require('sequelize')


class ExamLab extends Model {
	static init(connection) {
		super.init(
			{
				exam_id: DataTypes.INTEGER,
				lab_id: DataTypes.INTEGER
			},
			{
				sequelize: connection,
				tableName: 'exam_lab',
				modelName: 'ExamLab'
			}
		)
	}

	static associate(models) {

		this.hasMany(models.Exams,
			{
				constraint: true,
				foreignKey: 'exam_id',
				targetKey: 'id',
				as: 'exams'
			}
		)
		this.hasMany(models.Labs,
			{
				constraint: true,
				foreignKey: 'lab_id',
				targetKey: 'id',
				as: 'labs'
			}
		)
	}
}


module.exports = ExamLab
