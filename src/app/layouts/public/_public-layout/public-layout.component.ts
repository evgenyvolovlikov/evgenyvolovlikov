import {NgOptimizedImage} from '@angular/common'
import {Component} from '@angular/core'
import {LoginPageComponent} from '@pages/login'

@Component({
	selector: 'app-public-layout',
	templateUrl: './public-layout.component.html',
	styleUrl: './public-layout.component.scss',
	standalone: true,
	imports: [NgOptimizedImage, LoginPageComponent]
})
export class PublicLayoutComponent {}
