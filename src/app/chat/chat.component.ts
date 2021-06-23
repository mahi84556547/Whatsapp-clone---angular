import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() conversation:any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible :any;
  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  subData(c:any): void {
    let value = c.target.value.trim();
    this.message = '';
    if (value.length < 1)
    this.conversation.latestMessage = value;
    this.conversation.messages.unshift({
      id: 1,
      body: value,
      time: '10:21',
      me: true,
    });
  }

  emojiClicked(event:any) {
    this.message += event.emoji.native;
  }

}
