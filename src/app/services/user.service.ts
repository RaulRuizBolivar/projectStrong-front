import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userDto } from '../interfaces/userDto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://localhost:3000/user/';
  constructor(private http: HttpClient) {}

  getOne(id: string): Observable<User> {
    return this.http.get<User>(this.url + id);
  }

  create(userDto: userDto): Observable<User> {
    return this.http.post<any>(this.url, userDto);
  }
}
