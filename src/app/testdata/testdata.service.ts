import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { testdataDTO } from './testdata.model';


@Injectable({
  providedIn: 'root'
})
export class TestdataService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/assetdetails/gettestdata'

  getAll(): Observable<testdataDTO[]>{
    return this.http.get<testdataDTO[]>('https://localhost:44333/api/assetdetails/gettestdata');
  }
}
