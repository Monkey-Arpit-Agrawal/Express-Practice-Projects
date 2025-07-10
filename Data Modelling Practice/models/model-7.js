import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
    "Blood Group" : {
        type : String ,
        required : true ,
        enum : ['B+',"O+"]
    }
}, { timestamps: true });

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
