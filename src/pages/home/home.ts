import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  option:BarcodeScannerOptions;
  encodText : String='';
  encodedData : any={};
  scannedData : any={};
  arrData =[]
  myInput

  aboutPage = AboutPage;


  constructor(public navCtrl: NavController,public scanner:BarcodeScanner,private fdb: AngularFireDatabase) {
    this.fdb.list("/myItems").subscribe(_data =>{
      this.arrData =_data;      
      console.log(this.arrData);
    }
    )
  }
  scan(){
    this.option ={
      prompt:'scan you barcode'
    }
    this.scanner.scan(this.option).then((data) =>{
      this.scannedData =data;
    },(err) => {
      console.log('error :',err)

    })
  }
/*   encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE,this.encodText).then((data) =>{
      this.encodedData = data;
    },(err) => {
      console.log('error :',err)
    })
  } */
  btnAddClicked(){
    this.fdb.list("/myItems/").push(this.myInput);

  }


}


