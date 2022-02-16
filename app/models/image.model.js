module.exports = (sequelize, Sequelize) => {
  const ImageLikes = sequelize.define("image_likes", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    image_id: {
      type: Sequelize.INTEGER
    }
  },
      { timestamps: false }
  );

  return ImageLikes;
};
