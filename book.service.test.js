const bookService = require('./book.service')
const booksProvider = require('./books-provider')
const emailService = require('./email.service')

describe('searchBook', () => {
    describe('when one book matches the search text', () => {
        it('should return 1 book', () => {
            booksProvider.getBooks = jest.fn(() => [
                {
                    _id: 1,
                    title: 'Test book'
                }
            ]);
            emailService.sendMissingBookEmail = jest.fn();

            const books = bookService.searchBooks('Test')
            expect(books.length).toBe(1)
        })
    })
})