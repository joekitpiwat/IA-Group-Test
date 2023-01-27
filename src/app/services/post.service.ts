import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Posts, ResponseApi, Triangle } from "../models/model";

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

    async CalTriangle(body: Triangle)  {
        try{
            const url = 'http://localhost:3000';
            const res = await this.http.post<ResponseApi>(url, body).toPromise();
            return res;
        }catch(err){
            console.log(err);
            throw new Error('Cannot get Area');
        }
    }
}