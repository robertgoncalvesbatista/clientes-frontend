import { createStitches } from '@stitches/react';

const stitches = createStitches({
    media: {
        sm: '(min-width: 320px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1200px)'
    },
    theme: {
        colors: {
            // generated from coolors.co
            aliceBlue: '#F4FAFF',
            davyGrey: '#535657',

            cadetBlue: '#4F646F',
            platinum: '#DEE7E7',

            darkKhaki: '#B5BA72',
            darkSlateBlue: '#4F359B',

            // elements
            bg: '$aliceBlue',
            fg: '$davyGrey'
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
        textDecoration: 'none'
    },
    body: {
        fontSize: '100%',
        listStyleType: 'none'
    }
});

injectGlobalStyles();

export default stitches;
