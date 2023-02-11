import { createSlice } from '@reduxjs/toolkit'
import { ALERT_STATUS_SUCCESS, ALERT_TYPE_TEXT } from 'src/consts/Alert/ALERTS_CONSTS';


export const alertsBoxSlice = createSlice({
    name: 'alertBox',
    initialState: {
        value: [
            {
                id: 0,
                type: ALERT_TYPE_TEXT,
                status: ALERT_STATUS_SUCCESS,
                header: "Welcome",
                body: "",
                timeOut: 2
            }
        ]
    },
    reducers: {
        addAlert: (state, action) => {
            // state.value = action.payload;
            let id;
            if (state.value.length == 0) {
                id = 0;
            }
            else {
                id = state.value[state.value.length - 1].id + 1;
            }

            action.payload.id = id;
            state.value.push(action.payload)

        },
        removeAlert(state, action) {
            const index = state.value.findIndex(e => e.id == action.payload)
            state.value.splice(index, 1);
        },
        editAlert(state, action) {
        },
        clearAlert(state, action) {
            state.value = []
        }
    }
})

export const { addAlert, removeAlert, editAlert, clearAlert } = alertsBoxSlice.actions

export default alertsBoxSlice.reducer