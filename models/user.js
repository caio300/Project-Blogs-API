const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  user.associate = (model) => {
    user.hasMany(model.BlogPost,
      { foreingKey: 'userId', as: 'blogpost' });
  };

  return user;
};

module.exports = User;