import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../core/services/loader/loader.service';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.scss']
})
export class AboutsComponent implements OnInit {

  constructor(private loader: LoaderService) { }

  ngOnInit() {
    this.loader.Pageload();
  }

}
