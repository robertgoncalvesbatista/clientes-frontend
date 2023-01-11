import stitches from '../../stitches.config';

const Container = stitches.styled('div', {
    width: '100%',
    padding: '1rem',

    marginTop: '1rem',
    marginBottom: 'auto',

    borderRadius: '12px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
});

const AlignItems = stitches.styled('div', {
    display: 'flex',
    padding: '1rem',

    justifyContent: 'space-between',
});

export {
    Container
};