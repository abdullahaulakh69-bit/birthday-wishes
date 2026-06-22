import { Router } from 'express';
import { getWish, getPhotos, getQuotes } from '../controllers/apiController.js';

const router = Router();

router.get('/wish', getWish);
router.get('/photos', getPhotos);
router.get('/quotes', getQuotes);

export default router;
