import {Component} from '@angular/core'
import {RouterModule} from '@angular/router'
import {BaseLayoutComponent} from '@shared/layouts/base'
import {FooterComponent} from '@widgets/footer'
import {HeaderComponent} from '@widgets/header'

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	standalone: true,
	imports: [BaseLayoutComponent, HeaderComponent, RouterModule, FooterComponent]
})
export class MainLayoutComponent {}
