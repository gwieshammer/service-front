import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.api_url;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.apiUrl + '/users/all');
  }

  getById(id: number) {
    return this.http.get(this.apiUrl + '/users/' + id);
  }

  forgotPassword(email: string) {
    return this.http.post(this.apiUrl + '/auth/reset_password', email);
  }

  checkTokenExpired(token: string, email: string) {
    return this.http.get(`${this.apiUrl}/auth/reset_password/${token}/edit?email=` + email);
  }

  resetPassword(user: User, token: string, email: string) {
    return this.http.put(this.apiUrl + '/auth/reset_password/' + token + '?email=' + email, user);
  }

  checkAuthToken(token: string) {
    return this.http.post(this.apiUrl + '/users/auth/check_auth_token', token);
  }

  uploadAvatar(avatar: any, user_id: number) {
    const formData = new FormData();
    formData.append('avatar', avatar)
    return this.http.post(`${this.apiUrl}/users/${user_id}/updateavatar`, formData);
  }

}
