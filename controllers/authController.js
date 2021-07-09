import mongoose from 'mongoose';
// const admin = require("../model/admin");
import admin from '../models/admin.js';
import validator from 'email-validator';

export const signup_post = async (req, res) => {

    const { email, userName,pswd } = req.body;
    if(validator.validate(email)){
      try {
        const member = await admin.create({ userName,email,pswd });
        return res.status(200).json({name: member.userName,email:member.email});
      } catch (err) {
        // console.log(err);
        return res.status(201).json({error:"Already exists"})
      }
    }else{
      return res.status(201).json({error:"Invalid email address"})
    }

  };

  export const login_post = async (req, res) => {

    const { email,pswd } = req.body;
    if(validator.validate(email)){
      try {
        const member = await admin.login(email,pswd);
        return res.status(200).json({name: member.userName,email:member.email});
      } catch (err) {
        return res.status(201).json({error:"User not registered"})
      }
    }else{
      return res.status(201).json({error:"Invalid email address"})
    }

  };  