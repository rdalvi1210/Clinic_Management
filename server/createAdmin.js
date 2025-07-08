require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

async function createAdmin() {
  const admin = new Admin({
    firstName: "Vivek",
    lastName: "Dalvi",
    email: "doctor@gmail.com",
    password: "123456",
    role: "admin"
  });

  try {
    await admin.save();
    console.log('Admin created successfully');
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    mongoose.connection.close();
  }
}

createAdmin();
