import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  public appPages = [
    { title: 'MediaInbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'MediaOutbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'MediaFavorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'MediaArchived', url: '/folder/Archived', icon: 'archive' },
    { title: 'MediaTrash', url: '/folder/Trash', icon: 'trash' },
    { title: 'MediaSpam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [
    'MediaFamily',
    'MediaFriends',
    'MediaNotes',
    'MediaWork',
    'MediaTravel',
    'MediaReminders',
  ];
  constructor() {}

  ngOnInit() {}
}
