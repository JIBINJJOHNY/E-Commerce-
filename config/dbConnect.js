const {
    default: mongoose
} = require("mongoose");

const dbConnect = () => {
    try {
        const connection = mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database Error");
    }
};

module.exports = dbConnect;
