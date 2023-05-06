import { Component } from '@angular/core';
interface IDeveloper {
	name: string;
	photo: string;
	urlChannel: string;
	channelList?: string[];
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	developers: IDeveloper[] = [
		{
			name: 'Kevin Davila',
			photo: 'assets/badge gde.png',
			urlChannel: 'https://www.youtube.com/@KevinDavilaDev'
		},
		{
			name: 'Jimy Dolores',
			photo: 'assets/jimy.jpeg',
			urlChannel: 'https://www.youtube.com/@LogiDev'
		}
	];

	clickCard(urlChannel: any): void {
		window.open(urlChannel, '_blank');
	}
}
