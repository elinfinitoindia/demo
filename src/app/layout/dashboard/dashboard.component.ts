import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { trigger, transition, style, stagger, animate, state } from '@angular/animations';
import { query } from '@angular/core/src/render3/query';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [
        trigger('openClose', [
            state('open', style({
                height: '200px',
                opacity: 1,
                backgroundColor: 'yellow'
            })),
            state('closed', style({
                height: '100px',
                opacity: 0.5,
                backgroundColor: 'green'
            })),
            transition('* <=> *', [
                animate('1s')
            ]),

        ]),
    ],
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];
    isShown = "true";
    public users = 500;
    public image;

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor() {
        this.places = [
            {
                imgSrc: 'assets/images/card-1.jpg',
                place: 'Cozy 5 Stars Apartment',
                description:
                    'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
                charge: '$899/night',
                location: 'Barcelona, Spain'
            },
            {
                imgSrc: 'assets/images/card-2.jpg',
                place: 'Office Studio',
                description:
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
                charge: '$1,119/night',
                location: 'London, UK'
            },
            {
                imgSrc: 'assets/images/card-3.jpg',
                place: 'Beautiful Castle',
                description:
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
                charge: '$459/night',
                location: 'Milan, Italy'
            }
        ];
    }
    isOpen = true;

    toggle() {
        this.isOpen = !this.isOpen;
    }

    ngOnInit() { }
    onFileChange(event) {
       
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
           
            var url = `https://api.cloudinary.com/v1_1/ro1ii6uz/upload`;
            var xhr = new XMLHttpRequest();
            var fd = new FormData();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            // Optional - add tag for image admin in Cloudinary
            fd.append('upload_preset', 'lour2cf4')
            fd.append('file', file);
            xhr.send(fd);
        }
    }

    upload(file) {

    }
}
