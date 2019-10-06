import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/_models/list.model';
import {GeneralService} from '../_services/general.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists: List[];

  constructor(public GeneralService: GeneralService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.GeneralService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    })
  }

  deleteList(list: List) {
    this.GeneralService.deleteList(list._id).subscribe((res: any) => {
      this.lists = this.lists.filter(h => h !== list);
    });

  }
}
