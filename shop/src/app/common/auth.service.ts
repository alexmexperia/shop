import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login( User:object ) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, User)
    .pipe(
      tap(this.saveToken)
    )
    
  }

  private saveToken( response: any){
    if (response){
      const expireDate = new Date(new Date().getTime() + response.expiresIn*1000)
      localStorage.setItem('expireDate',expireDate.toString())
      localStorage.setItem('Token',response.idToken)
    } else {
      localStorage.clear()
    }

  }

  get token () {
    const expDate = new Date(''+localStorage.getItem('expireDate'))
    if ( new Date > expDate ) {
      this.logout()
      return null
    }
    return localStorage.getItem('Token')
  }

  logout() {
    this.saveToken(null)
  }

  isAuthentificated() {
    return !!this.token
  }
}



