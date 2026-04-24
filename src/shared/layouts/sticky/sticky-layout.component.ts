import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
	selector: 'app-sticky-layout',
	standalone: true,
	templateUrl: './sticky-layout.component.html',
	styleUrl: './sticky-layout.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickyComponentLayout {}
