import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EncryptionDecryptionService } from 'src/services/encryption-decryption.service';


@Component({
  selector: 'app-encdec',
  templateUrl: './encdec.component.html',
  styleUrls: ['./encdec.component.scss']
})
export class EncdecComponent implements OnInit {

  
  private readonly apiUrl = "https://localhost:7083/api";
  inputText! : string; 
  outputText! :any;

  constructor(private http:HttpClient, private encDec:EncryptionDecryptionService) { }

  ngOnInit(): void {

    

  }

  encrypt(plainText : string){
    console.log("Encrypting : ", plainText);
    this.outputText = this.encDec.encryptForAsp(plainText);
  }

  decrypt(encryptedText : string){
    console.log("Decrypting : ", encryptedText);
    this.outputText = this.encDec.decryptForAsp(encryptedText);
  }

  

}
