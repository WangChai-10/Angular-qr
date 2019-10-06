import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../_services/general.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/_models/list.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private route: ActivatedRoute, public GeneralService: GeneralService, private router: Router) { }

  list: List;
  selectedListId: string;
  qrcodename: string;
  title = 'generate-qrcode';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  display = false;
  href: string;
  progress: number = 0;

  ngOnInit() {
    this.selectedListId = this.route.snapshot.paramMap.get('id');
    this.getList(this.selectedListId);
  }

  getList(listId: string) {

    return this.GeneralService.getList(listId).subscribe((list: List) => {
      this.list = list;
      this.qrcodename = this.list.title;
      this.generateQRCode();
    });
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

  updateList(title: string) {
    console.log(title);
    this.GeneralService.updateList(this.selectedListId, title).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

}
