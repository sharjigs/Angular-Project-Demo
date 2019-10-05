import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/services/loader/loader.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(private lloader: LoaderService) { }

  ngOnInit() {
    this.lloader.Pageload();
  }

}
