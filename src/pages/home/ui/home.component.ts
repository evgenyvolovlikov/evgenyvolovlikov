import {Component} from '@angular/core'
import {ButtonComponent} from '@shared/ui/button'
@Component({
	selector: 'app-page-home',
	imports: [ButtonComponent],
	standalone: true,
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomePageComponent {}
