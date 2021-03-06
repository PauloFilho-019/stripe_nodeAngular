const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect(
    process.env.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log(`*** Conexion correcta a la base de datos ***`);
      } else {
        console.log(err);
      }
    }
  );

  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);
};

module.exports = { dbConnect };
