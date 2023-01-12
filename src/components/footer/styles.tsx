import stitches from '../../stitches.config';

const Container = stitches.styled('div', {
    width: '100%',
    padding: '0.5rem',

    display: 'flex',
    justifyContent: 'center',

    background: '$black',
});

const AlignItems = stitches.styled('div', {
    display: 'flex',
    padding: '0 0.5rem 1.5rem 0',

    alignItems: 'center',
    justifyContent: 'center',

    maxWidth: '90%',
    width: '100%',

    '@sm': {
        maxWidth: '90%',
    },
    '@md': {
        maxWidth: '90%',
    },
    '@lg': {
        maxWidth: '90%',
    },
    '@xlg': {
        maxWidth: '1320px',
    },
});

export {
    Container,
    AlignItems,
};