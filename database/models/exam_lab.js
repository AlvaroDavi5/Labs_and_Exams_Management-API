const { Model, DataTypes } = require('sequelize')


class ExamLab extends Model {
	static init(connection) {
		super.init({
			exam_id: DataTypes.INTEGER,
			lab_id: DataTypes.INTEGER
		},
		{ sequelize: connection }
		)
	}

	static associate(models) {
		this.hasMany(models.Exams, {foreignKey: 'exam_id', targetKey: 'id', as: 'exams'})
		this.hasMany(models.Labs, {foreignKey: 'lab_id', targetKey: 'id', as: 'labs'})
	}
}


module.exports = ExamLab
