import { Categoria } from "./categoria/categoria.model"
import { CINEMA_API } from "../app.api";
import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { ErrorHandler } from "../app.error-handler";



@Injectable()
export class CategoriasService {
    categorias: Categoria[] = [
        /*{id: 1, titulo: 'Terror', imagePath: '../../assets/images/dracula.png'},
        {id: 2, titulo: 'Aventura', imagePath: '../../assets/images/climbing.png'},
        {id: 3, titulo: 'Romance', imagePath: '../../assets/images/romance.png'},
        {id: 4, titulo: 'Comédia', imagePath: '../../assets/images/comedy.png'}*/ 
    ];

    constructor(private http: HttpClient){}

    listarCategorias(): Observable<Categoria[]>{
        return this.http.get<Categoria[]>(`${CINEMA_API}/categorias`) .pipe(catchError(ErrorHandler.handlerError));
    }
}