import {Component} from '@angular/core'
import {RegisterByEmailComponent} from '@features/register-by-email'

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [RegisterByEmailComponent],
	templateUrl: './register.component.html'
})
export class RegisterPageComponent {}
