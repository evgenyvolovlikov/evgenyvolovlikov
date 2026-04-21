import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
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
