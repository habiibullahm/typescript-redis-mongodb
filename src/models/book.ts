import { Schema, model } from 'mongoose';

//interface for book model 
interface Book {
    title : string ;
    author : string;
    isbn? : string;
}

//schema 

const bookSchema = new Schema<Book>({
    title: {type: String, required : true},
    author : {type : String, required : true},
    isbn : String,
});

//Export book model 
export default model<Book>('Book', bookSchema)

