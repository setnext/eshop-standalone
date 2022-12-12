import { Injectable } from '@angular/core';
import *  as CryptoJS from 'crypto-js';

enum ObjectType {
  text,
  json,
}

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  key = "assseerrsseeerrtyuuugghh";



  constructor() { }

  public saveData(key: string, value: string, type: ObjectType, isEncryptRequired: boolean,) {
    if (isEncryptRequired) {
      if (type == ObjectType.text) {
        localStorage.setItem(key, this.encrypt(value));
      }
      if (type == ObjectType.json) {
        const stringifiedValue = JSON.stringify(value);
        localStorage.setItem(key, this.encrypt(stringifiedValue));
      }
    }
    else {
      if (type == ObjectType.json) {
        const stringifiedValue = JSON.stringify(value);
        localStorage.setItem(key, stringifiedValue);
      }
      else {
        localStorage.setItem(key, value);
      }
    }
  }

  public getData(key: string,type:ObjectType, isDecryptRequired: boolean) {
    if (isDecryptRequired) {
      if(type==ObjectType.json){
      let data = localStorage.getItem(key) || "";
      let jsonObj = JSON.parse(this.decrypt(data));
      return jsonObj;
      }
      else
      {
        let data = localStorage.getItem(key) || "";
      return this.decrypt(data);
      }
      

    }
    else {

      return localStorage.getItem(key)
    }
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
}
