import {Component} from '@angular/core'
import {RouterModule, RouterOutlet} from '@angular/router'
@Component({
	selector: 'app-private-layout',
	templateUrl: './private-layout.component.html',
	styleUrl: './private-layout.component.scss',
	standalone: true,
	imports: [RouterModule, RouterOutlet]
})
export class PrivateLayoutComponent {}
