import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class EncryptionDecryptionService {

constructor() { 
}

encrypt(plainText:string){
  return CryptoJS.AES.encrypt(plainText.toString(), environment.aesKey);
}

decrypt(encryptedText:string){
  return CryptoJS.AES.decrypt(encryptedText, environment.aesKey).toString(CryptoJS.enc.Utf8);
}

}
