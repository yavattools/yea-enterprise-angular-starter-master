import {
  animate,
  query,
  style,
  transition,
  trigger,
  stagger,
  sequence,
  state,
  keyframes
} from '@angular/animations';

export const ANIMATE_ON_ROUTE_ENTER = 'route-enter-staggered';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter > *', style({ opacity: 0, position: 'fixed' }), {
      optional: true
    }),
    query(':enter .' + ANIMATE_ON_ROUTE_ENTER, style({ opacity: 0 }), {
      optional: true
    }),
    sequence([
      query(
        ':leave > *',
        [
          style({ transform: 'translateY(0%)', opacity: 1 }),
          animate(
            '0.2s ease-in-out',
            style({ transform: 'translateY(-3%)', opacity: 0 })
          ),
          style({ position: 'fixed' })
        ],
        { optional: true }
      ),
      query(
        ':enter > *',
        [
          style({
            transform: 'translateY(-3%)',
            opacity: 0,
            position: 'static'
          }),
          animate(
            '0.5s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1 })
          )
        ],
        { optional: true }
      )
    ]),
    query(
      ':enter .' + ANIMATE_ON_ROUTE_ENTER,
      stagger(100, [
        style({ transform: 'translateY(15%)', opacity: 0 }),
        animate(
          '0.5s ease-in-out',
          style({ transform: 'translateY(0%)', opacity: 1 })
        )
      ]),
      { optional: true }
    )
  ])
]);

// export let routeAnimation = trigger('routeAnimation', [
//   transition('void => *', [
//     style({
//       opacity: 0,
//     }),
//     animate('400ms 150ms ease-in-out', style({
//       opacity: 1,
//     }))
//   ]),
// ]);

export let fadeOutAnimation = trigger('fadeOutAnimation', [
  state(
    '*',
    style({
      position: 'absolute',
      'min-width': '100%',
      'min-height': '100%',
      'max-width': '100%',
      display: 'flex',
      'flex-direction': 'column',
      flex: '1',
      height: '100%'
    })
  ),
  state(
    'void',
    style({
      position: 'absolute',
      'min-width': '100%',
      'min-height': '100%',
      'max-width': '100%',
      display: 'flex',
      'flex-direction': 'column',
      flex: '1',
      height: '100%'
    })
  ),
  transition('* => void', [
    style({
      opacity: 1
    }),
    animate(
      '150ms linear',
      style({
        opacity: 0
      })
    )
  ])
]);

export const LIST_FADE_ANIMATION = [
  trigger('listFade', [
    transition(':leave', [
      style({ height: '*', opacity: '1', transform: 'translateX(0)' }),
      sequence([
        animate(
          '250ms ease',
          style({ height: '*', opacity: 0, transform: 'translateX(50px)' })
        ),
        animate(
          '100ms ease',
          style({ height: '0', opacity: 0, transform: 'translateX(50px)' })
        )
      ])
    ]),
    transition(':enter', [
      style({ height: '0', opacity: '0', transform: 'translateX(50px)' }),
      animate(
        '350ms 350ms ease',
        style({ height: '*', opacity: 1, transform: 'translateX(0)' })
      )
    ])
  ])
];

export const appAnimations = [
  trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      animate(
        500,
        keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ])
      )
    ]),
    transition('* => void', [
      animate(
        500,
        keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ])
      )
    ])
  ]),
  trigger('contentInOut', [
    state(
      'go80',
      style({
        opacity: '1',

        'z-index': '90'
      })
    ),
    state(
      'go100',
      style({
        opacity: '1',
        width: '99.2%'
      })
    ),
    transition('go80 => go100', animate('400ms ease-in-out')),
    transition('go100 => go80', animate('400ms ease-in-out'))
  ]),
  trigger('SlideDownUp', [
    state(
      'goh0',
      style({
        opacity: '0',
        height: '0px'
      })
    ),
    state(
      'goh100',
      style({
        opacity: '1',
        height: '240px'
      })
    ),
    transition(
      'goh0 => goh100',
      animate(
        '400ms',
        keyframes([
          style({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateY(15px)', offset: 0.3 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
        ])
      )
    ),

    transition(
      'goh100 => goh0',
      animate(
        '200ms',
        keyframes([
          style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateY(15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateY(-100%)', offset: 1.0 })
        ])
      )
    )
  ])
];
