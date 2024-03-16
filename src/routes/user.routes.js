
import { Router } from 'express';
import { ragisterUser } from '../controllers/user.controller.js';

const route = Router();

route.route('/ragister').post(ragisterUser)

export default route;