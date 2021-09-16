import { Request, Response } from 'express';

class BooksCtrlr {
    public index = (req:Request, res: Response): void => {
        res.render('books/index', {
            title: 'Books'
        });
    }
    
    public renderFormBook = (req: Request, res: Response): void => {
        res.render('books/add', { 
            pageTitle: 'Add a book' 
        });
    }
    
    public saveBook = (req: Request, res: Response): void => {
        console.log(req.body);
        res.send('received');
        
    }
}

export const booksCtrlr = new BooksCtrlr();