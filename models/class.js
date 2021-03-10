// Creates Classes model
module.exports = function(sequelize, DataTypes) {
  const Classes = sequelize.define(
    "Classes",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      instructorId: {
        type: DataTypes.INT,
        allowNull: false
      }
    },
    { freezeTableName: true }
  );

  Classes.associate = models => {
    Classes.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Classes;
};
