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
    padding: '0 0.5rem',

    alignItems: 'center',
    justifyContent: 'space-between',

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

const LinkItem = stitches.styled('a', {
    padding: '0.5rem',
    margin: '0 0.5rem',

    boxSizing: 'border-box',
    cursor: 'pointer',

    color: '$white',

    display: 'inline-block',
    width: '100px',
    textAlign: 'center',

    '&:after': {
        fontFamily: "around-icons",
        fontSize: '1.375em',
        fontWeight: 'normal',
        verticalAlign: 'middle',
        border: 'none',
        lineHeight: 1,

        display: 'inline-block',
        marginLeft: '.15em',
        content: "",
        borderTop: '.3em solid',
        borderBottom: 0,
        borderLeft: '.3em solid rgb(255 255 255)',
    },

    variants: {
        button: {
            true: {
                backgroundColor: '$blueOne',
                border: '1px solid transparent',
                borderRadius: '.75rem',
                '&:hover': {
                    background: '$blueTwo',
                },
            },
        },
    },

});

const Button = stitches.styled('button', {
    padding: '0.5rem',
    margin: '0 0.5rem',

    backgroundColor: '$redOne',
    border: '1px solid transparent',
    borderRadius: '.75rem',
    boxSizing: 'border-box',
    color: '$white',
    cursor: 'pointer',

    display: 'inline-block',
    width: '100px',
    textAlign: 'center',

    '&:hover': {
        background: '$redTwo',
    },
});

export {
    Container,
    AlignItems,
    LinkItem,
    Button,
};