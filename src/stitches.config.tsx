import { createStitches } from '@stitches/react';

const stitches = createStitches({
    media: {
        sm: '(min-width: 320px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1200px)',
        xlg: '(min-width: 1400px)',
    },
    theme: {
        colors: {
            // generated from coolors.co
            white: '#FBF9FA',
            black: '#121519',

            blueOne: '#0A2647',
            blueTwo: '#144272',
            blueThree: '#205295',
            blueFour: '#2C74B3',

            redOne: '#A80038',
            redTwo: '#FD0054',

            // elements
            bg: '$white',
            fg: '$black',
        },
        space: {
            xxs: '0.422rem',
            xs: '0.563rem',
            sm: '0.75rem',
            rg: '1rem',
            md: '1.33rem',
            lg: '1.77rem',
            xl: '2.369rem',
            xxl: '3.157rem'
        },
        fontSizes: {
            xxs: '0.422rem',
            xs: '0.563rem',
            sm: '0.75rem',
            rg: '1rem',
            md: '1.33rem',
            lg: '1.77rem',
            xl: '2.369rem',
            xxl: '3.157rem'
        }
    }
});

const injectGlobalStyles = stitches.globalCss({
    '*, *:after, *:before': {
        margin: 0,
        padding: 0,

        boxSizing: 'border-box',
        textDecoration: 'none',
        color: '$fg',
        fontFamily: 'Poppins, sans-serif'
    },
    body: {
        fontSize: '100%',
        listStyleType: 'none',
        background: '$bg',
    },
    'ul, li, ol': {
        listStyle: 'none',
    }
});

injectGlobalStyles();

export default stitches;
