import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  public appPages = [
    { title: 'CompanyInbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'CompanyOutbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'CompanyFavorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'CompanyArchived', url: '/folder/Archived', icon: 'archive' },
    { title: 'CompanyTrash', url: '/folder/Trash', icon: 'trash' },
    { title: 'CompanySpam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [
    'CompanyFamily',
    'CompanyFriends',
    'CompanyNotes',
    'CompanyWork',
    'CompanyTravel',
    'CompanyReminders',
  ];
  constructor() {}

  ngOnInit() {}
}
