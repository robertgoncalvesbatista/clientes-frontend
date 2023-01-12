import stitches from '../../stitches.config';

const ContainerHome = stitches.styled('div', {
    width: "100%",
    height: '100%',

    display: 'flex',
    flexDirection: 'column',

    marginRight: 'auto',
    marginLeft: 'auto',

    maxWidth: '90%',

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
    ContainerHome
};