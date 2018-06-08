import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    //templateUrl: './events-thumbnail.component.html'
    templateUrl: './events-thumbnail.component.html'
   
})

export class EventListComponent{
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '2/7/2018',
        time: '10:00 Am',
        price: 600,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location:{
            address: 'Accenture Solutions Pvt Ltd',
            city: 'Hyderabad',
            Country: 'India'
        }
    }

    handleEventClicked(data): void{
        console.log('Received from child: '+ data );
        alert("clicked");
    }
}