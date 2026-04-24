import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {FooterComponent} from '@widgets/footer'
import {HeaderComponent} from '@widgets/header'

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	standalone: true,
	styleUrl: './main-layout.component.scss',
	imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class MainLayoutComponent {}
