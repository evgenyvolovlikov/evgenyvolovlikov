import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
	selector: 'app-base-layout',
	templateUrl: './base-layout.component.html',
	standalone: true,
	styleUrl: './base-layout.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {}
