import Router from 'express';
import { body, validationResult } from 'express-validator';
import * as womenController from '../controllers/women.controller.js'
import user from "../models/women.model.js"
import womenMiddleware from '../middleware/women.middleware.js';
import emergencyModel from '../models/emergency.model.js';
import { addOrUpdateContacts,getContacts } from '../controllers/emergency.controller.js';

const router = Router();

router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email Format"),
    body('password').isLength({min:8}).withMessage("Password must be at least 8 characters long"),
],womenController.registerWomenController)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
],womenController.loginWomenController)

router.get('/logout',
    womenController.logoutWomenController
)




router.post("/contacts", addOrUpdateContacts);


router.get("/contacts/:userId", getContacts);


export default router