import { Component, OnInit } from '@angular/core';
import { testdataDTO } from './testdata/testdata.model';
import { TestdataService } from './testdata/testdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NAVCAlculatorApp';

  constructor(private testdataservice : TestdataService){}

  testdata: testdataDTO[];

  ngOnInit(): void{

    this.testdataservice.getAll().subscribe((testdata: testdataDTO[]) => {
      //console.log(testdata);
      this.testdata = testdata;
    });
  }
}
