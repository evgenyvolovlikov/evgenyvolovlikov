import {Component} from '@angular/core'
import {RouterLink} from '@angular/router'

@Component({
	selector: 'app-header',
	standalone: true,
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	imports: [RouterLink]
})
export class HeaderComponent {
	isMenuOpen = false

	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen
		if (this.isMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}

	closeMenu() {
		this.isMenuOpen = false
		document.body.style.overflow = 'auto'
	}
}
