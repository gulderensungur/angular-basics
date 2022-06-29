import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  username = '';
  isServerCreated = false;
  serverStatus = 'offline';
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() < 0.5 ? 'offline' : 'online';

    this.servers.push(this.serverName);
  }

  ngOnInit(): void {}

  addServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.isServerCreated = true;
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    this.username = '';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
