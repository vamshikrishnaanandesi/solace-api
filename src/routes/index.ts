import { Router } from 'express';
import userRoutes from './user';
import { authMiddleware } from '../middlewares';

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Solace API');
});

router.use('/users', authMiddleware, userRoutes);

export default router;