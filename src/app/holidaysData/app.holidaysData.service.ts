import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HolidaysDataService{
    private _dataUrl = 'https://holidayapi.com/v1/holidays?key=bc59b6e5-2798-4473-a7dc-1e0719f1df8c&country=US&year=2016';

    constructor(private _http : HttpClient){}

    getData() {
        return ['vinod', 'vinod1', 'vinod2'];
        //this._http.get<any[]>(this._dataUrl);
    } 
}