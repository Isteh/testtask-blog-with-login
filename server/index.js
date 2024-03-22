const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://qwerty:aaabbbccc@cluster0.sfyia5r.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0'
    );
    app.listen(PORT, () => {
      console.log('Server started at 3001');
    });
  } catch (e) {
    console.log(e);
  }
};

start();
