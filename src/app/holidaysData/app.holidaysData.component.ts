import { Component } from '@angular/core';
import { HolidaysDataService } from './app.holidaysData.service';

@Component({
    selector: 'holiday-data',
    templateUrl: './app.holidaysData.html'
})
export class HolidaysDataComponent {
    title = 'Holiday data title';
    apiData: any = [];
    
    
    constructor(private _dataService: HolidaysDataService){

    }

    ngOnInit(): void{
        this.apiData = this._dataService.getData();
        console.log(this.apiData );
    }

}