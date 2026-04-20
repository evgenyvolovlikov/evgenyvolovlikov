import {Component} from '@angular/core'
import {PublicLayoutComponent} from './layouts/public'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [PublicLayoutComponent],
	templateUrl: './app.component.html'
})
export class AppComponent {
	onInputChange(event: string | null): void {
		console.log(event)
	}

	onPasswordInputChange(event: string): void {
		console.log(event)
	}
}
