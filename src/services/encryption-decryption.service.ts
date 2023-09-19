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



// -------------------------------------------------------------- COMPATIBLE WITH ASP.NET WEB API

key = CryptoJS.enc.Utf8.parse(environment.aesKey);
iv  = CryptoJS.enc.Utf8.parse(environment.iv);

// Methods for the encrypt and decrypt Using AES
encryptForAsp(data:any) {
  let encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(data)), this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
  console.log('Encrypted :' + encrypted);
  this.decryptForAsp(encrypted);
  return encrypted;
}

decryptForAsp(decString:any) {
  var decrypted = CryptoJS.AES.decrypt(decString, this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
  console.log('Decrypted : ' + decrypted);
  console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));

  return decrypted.toString(CryptoJS.enc.Utf8);
}


}
