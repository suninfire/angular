import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {urls} from "../configs";
import {HttpClient} from "@angular/common/http";
import {IComment} from "../interfaces";


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.posts)
  }
}
