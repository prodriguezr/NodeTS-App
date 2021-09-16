import { Router } from 'express';
import { homeCtrlr } from '../controllers';

const router:Router = Router();

router.get('/', homeCtrlr.index);

export default router;