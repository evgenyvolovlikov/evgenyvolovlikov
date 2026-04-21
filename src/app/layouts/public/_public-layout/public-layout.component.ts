import {NgOptimizedImage} from '@angular/common'
import {Component} from '@angular/core'
import {RouterLink} from '@angular/router'
import {ButtonComponent} from '@shared/ui/button'
import {InputComponent} from '@shared/ui/input'
import {PasswordInput} from '@shared/ui/password-input'

@Component({
	selector: 'app-public-layout',
	templateUrl: './public-layout.component.html',
	styleUrl: './public-layout.component.scss',
	standalone: true,
	imports: [
		NgOptimizedImage,
		RouterLink,
		ButtonComponent,
		InputComponent,
		PasswordInput
	]
})
export class PublicLayoutComponent {}
