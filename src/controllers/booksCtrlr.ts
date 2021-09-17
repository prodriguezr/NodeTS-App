import { Request, Response } from 'express';
import BookModel, { Book } from '../models/Book';

class BooksCtrlr {
    public async index(req:Request, res: Response): Promise<void> {
        const books:Book[] = await BookModel.find();

        res.render('books/index', {
            title: 'Books',
            books: books.map(book => book.toJSON())
        });
    }
    
    public renderFormBook(req: Request, res: Response): void {
        res.render('books/add', { 
            pageTitle: 'Add a book' 
        });
    }
    
    public async saveBook(req: Request, res: Response): Promise<void> {
        const { title, author, isbn } = req.body;

        const book:Book = new BookModel({
            title,
            author,
            isbn
        });

        await book.save();

        res.redirect('/books'); 
    }
}

export const booksCtrlr = new BooksCtrlr();