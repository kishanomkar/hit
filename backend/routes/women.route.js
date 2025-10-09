import Router from 'express';
import { body, validationResult } from 'express-validator';
import * as womenController from '../controllers/women.controller.js'
import user from "../models/women.model.js"
import womenMiddleware from '../middleware/women.middleware.js';


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

export default router