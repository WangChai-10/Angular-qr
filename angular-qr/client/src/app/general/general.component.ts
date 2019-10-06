import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../_services/general.service';
import { Router } from '@angular/router';
import { List } from 'src/app/_models/list.model';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  qrcodename: string;
  title = 'generate-qrcode';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  display = false;
  href: string;
  progress: number = 0;

  constructor(public GeneralService: GeneralService, private router: Router) { }

  ngOnInit() {
  }
  generateQRCode(){
    if (this.qrcodename == '') {
      this.display = false;
      alert("Please enter the name");
      return;
    }
    else {
      this.value = this.qrcodename;
      this.display = true;
    }
  }

  createList() {
    this.GeneralService.createList(this.qrcodename).subscribe((list: List) => {
      console.log(list);
      this.router.navigate(['/', list._id]);
    });
  }

  downloadImage() {
    console.log(document.getElementsByTagName('img')[0].src);
    // this.href = document.getElementsByTagName('img')[0].src;
  }

}
