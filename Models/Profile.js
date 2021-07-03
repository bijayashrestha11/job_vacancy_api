const { Schema, model } = require('mongoose')

const seekerProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  location: {
    type: String,
    required: true
  },
  isPulchowk: {
    type: Boolean,
    required: true
  },
  jobInterests: {
    type: [String], 
  },
  workEmail: {
    type: String,
    required: true   
  },
  currentStatus: {
    type: String,
    required: true
  },
  currentJob: {
    type: String,
  },
  desc: {
    type: String,
  },
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    github: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const SeekerProfile = model('seekerprofiles', seekerProfileSchema)

const recruiterProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  location: {
    type: String,
    required: true
  },
  noOfJobs: {
    type: Number,
    default: 0
  },
  desc: {
    type: String,
  },
  website: {
    type: String,
  },
  workEmail: {
    type: String,
    required: true
  },
  contactNo: {
    type: Number,
    required: true
  },
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const RecruiterProfile = model('recruiterprofiles', recruiterProfileSchema)

module.exports = {
  SeekerProfile,
  RecruiterProfile
}