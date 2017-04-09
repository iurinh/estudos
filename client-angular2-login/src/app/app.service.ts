import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

@Injectable()
export class AppService{

    http: Http;
    headers: Headers;
    url: string = 'http://192.168.0.3:3000/authenticate/login';

    constructor(http: Http){
        this.http = http;
        // this.headers = new Headers({
        //     'Content-Type':'application/json',
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Headers": "origin, content-type, accept, authorization",
        //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD",
        //     "Access-Control-Max-Age": "2000"
        // });
        this.headers = new Headers();
        this.headers.append('Content-Type','application/json');
        // this.headers.append("Access-Control-Allow-Origin", "*");
        // this.headers.append("Access-Control-Allow-Headers", "X-Requested-With,content-type");
        // this.headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        // this.headers.append("Access-Control-Max-Age", "2000");
    }

    post(){
        return this.http
                .post(this.url, JSON.stringify({'repostinha':'maroto aqui'}))
    }
}