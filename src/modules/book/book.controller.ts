import { BookService } from './book.service';
import { BookPayload } from './book.interface';
import { Body, Param, Controller, Post, Get, Patch, Delete } from '@nestjs/common';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

    @Post("create")
    async addBook(@Body() bookData: BookPayload) {
        return this.bookService.createBook(bookData)
    }

    @Get("get/:id")
    async getBookByID(@Param("id") id: string) {
        return this.bookService.getBook(parseInt(id))
    }

    @Patch("update/:id")
    async updateBookData(@Param("id") id: string, @Body() updatedData: BookPayload) {
        return this.bookService.updateBook(updatedData,parseInt(id))
    }

    @Delete("delete/:id")
    async deleteBook(@Param("id") id: string) {
        return this.bookService.deleteBook(parseInt(id))
    }
}
