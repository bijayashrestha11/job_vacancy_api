// Import all packages
const express = require('express')
const cors = require('cors')
const { connect } = require('mongoose')
const { success, error } = require('consola')
const passport = require('passport')

const { DB, PORT } = require("./Config")
const { jwtPassport } = require("./Middlewares/passport")

// Initialize the application
const app = express()

// Packages middlewares
app.use(cors())
app.use(express.json())
app.use(passport.initialize())

// User Defined Middlewares
jwtPassport(passport)

// Router middleware
app.use('/api/users', require('./Routes/registration'))
app.use('/api/users', require('./Routes/login'))
app.use('/api/users', require('./Routes/protected'))
app.use('/api/users', require('./Routes/profile'))

const connectandStart = async () => {
   try{
      // Connection with the database
      await connect(DB, { 
         useFindAndModify: true, 
         useUnifiedTopology: true, 
         useNewUrlParser: true
      })

      success({
         message: "Successfully connected with the MongoDB atlas",
         badge: true
      })

      // Listening to the port
      app.listen(PORT, () => 
         success({ 
            message: `Server listening to port ${PORT}`, 
            badge: true 
         })
      )
   } catch (err) {
      error({
         message: `Unable to connect to MongoDB atlas \n${err}`, 
         badge: true 
      })
      connectandStart();
   }
}

connectandStart();

