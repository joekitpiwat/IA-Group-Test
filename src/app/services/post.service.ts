import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Posts } from "../models/model";

@Injectable({providedIn: 'root'})

export class PostService {


    constructor(private http: HttpClient) {

    }

    async getPosts()  {
        try{
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const res = await this.http.get<Posts[]>(url).toPromise();
            return res;
        }catch(err){
            console.log(err);
            throw new Error('Cannot get Posts');
        }
    }
}