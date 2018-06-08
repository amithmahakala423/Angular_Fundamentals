import { Component, Input, Output, EventEmitter } from "@angular/core";



@Component({
    selector: 'event-thumbnail',
    template:`
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div>
            <div class = "well hoverwell thumbnail">
                <h2>{{event.name}}</h2>
                <div>Date: {{event.date}}</div>
                <div>Time: {{event.time}}</div>
                <div>Price: \${{event.price}}</div>
                <div>
                    <span>Location: {{event.location.address}}</span>
                    <span>&nbsp;</span>
                    <span> {{event.location.city}},</span>
                    <span> {{event.location.Country}}</span>
                </div>
                <button class = "btn btn-primary" (click) = "buttonclickhandle()">ClickME!</button>
            </div>
        </div>
    </div>`
})
export class EventThumbnailComponent{
    @Input() event: any;

    @Output() eventClick = new EventEmitter();

    buttonclickhandle(){
        console.log("Button clicked: "+ this.event.name);  
        this.eventClick.emit(this.event);
    }
}
