import { animate, style, transition, trigger } from '@angular/animations';

export const fade = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ opacity: 0 }), // Start hidden
    animate('300ms ease-in-out', style({ opacity: 1 })), // Fade in
  ]),
]);
