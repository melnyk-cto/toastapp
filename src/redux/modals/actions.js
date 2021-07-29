import { createActions } from 'redux-actions';


export const modalsActions = createActions(
    {
        // Sync
        SET_SHOW_MODAL: state => state,
    },
    {
        prefix: 'modals',
        namespace: '.',
    },
);
