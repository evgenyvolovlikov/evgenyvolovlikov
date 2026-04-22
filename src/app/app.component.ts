import {Component} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {MainLayoutComponent} from '@shared/layouts/main/main-layout.component'
import {FooterComponent} from '@widgets/footer'
import {HeaderComponent} from '@widgets/header'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, FooterComponent, MainLayoutComponent],
	templateUrl: './app.component.html'
})
export class AppComponent {}
