import { Component } from '@angular/core';
import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'push-notification-fcm';

  message;

  constructor(private messagingService: MessagingService){  }

  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()

    this.message = this.messagingService.currentMessage;
    
    // this.message.subscribe((res)=>{
    //   console.log(res)
    //   if(res != null){
    //     this.message = res.body;
    //   }else{
    //     this.message = "ola";
    //   }
    // })
  }
  
}
