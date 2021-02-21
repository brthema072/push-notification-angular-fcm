import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload: any) => {
        console.log("new message received. ", payload.notification.body);
        this.currentMessage.next(payload.notification);
        this.showCustomNotification(payload)
      })
  }

  showCustomNotification(payload: any){
    let notify_data = payload["notification"];
    let title = notify_data["title"];
    let options = {
      body: notify_data["body"],
      icon: "./assets/navbar-circlu-animation.png",
      badge: "./assets/navbar-circlu-animation.png",
      image: "./assets/navbar-circlu-animation.png"
    }

    let notify: Notification = new Notification(title, options)

    notify.onclick = event => {
      event.preventDefault();
      window.open("https://www.google.com", "_blank");
    }
  }

}
