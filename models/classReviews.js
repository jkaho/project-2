// Creates Classes model
module.exports = function(sequelize, DataTypes) {
  const ClassReviews = sequelize.define(
    "classReviews",
    {
      review: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      rating: {
        type: DataTypes.INT,
        allowNull: false
        // Rating out of 5 stars
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    { freezeTableName: true }
  );

  ClassReviews.associate = models => {
    ClassReviews.belongsTo(models.Classes, {
      foreignKey: {
        name: "authorId",
        allowNull: false
      }
    });
  };
  return ClassReviews;
};
