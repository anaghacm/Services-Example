import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public username!:string;
  public email!:string;
  public password!:string;

  constructor(private http:HttpClient) { }

  setData(username:string, email:string, password:string){
    this.username=username;
    this.email=email;
    this.password=password;
  }

  getData(){
    let userInfo={
      username:this.username,
      email:this.email,
      password:this.password
    }
    return userInfo;
  }

  getCountryInfo(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getCountryRegion(region:string){
    return this.http.get('https://restcountries.com/v3.1/region/'+region);
  }
  getCountryName(name:string){
    return this.http.get('https://restcountries.com/v3.1/name/'+name);
  }
  getCountryLang(lang:string){
    return this.http.get('https://restcountries.com/v3.1/lang/'+lang);
  }

}
