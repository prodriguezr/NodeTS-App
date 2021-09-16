import { Router, Request } from 'express';
import { booksCtrlr } from '../controllers';

const router:Router = Router();

router.get('/', booksCtrlr.index);
router.get('/add', booksCtrlr.renderFormBook);
router.post('/add', booksCtrlr.saveBook);

export default router;