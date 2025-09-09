import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  diagonsedWith: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    reqiured: true,
  },
  bloodGroup: {
    type: String,
    reqiured: true,
  },
  gender: {
    type: String,
    enum: ['M', 'F', 'O'],
    required: true,
  },
  admitted: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
  },
}, { timestamps: true });

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
