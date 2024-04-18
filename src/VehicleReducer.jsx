// VehicleReducer.jsx
import { createSlice } from "@reduxjs/toolkit";
import { vehicleList } from "./Data";

const vehicleSlice = createSlice({
    name: "vehicles",
    initialState: vehicleList,
    reducers: {
        addVehicle: (state, action) => {
            const newVehicle = {
                id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
                ...action.payload
            };
            state.push(newVehicle);
        },
        updateVehicle: (state, action) => {
            const { id } = action.payload;
            const existingVehicle = state.find(vehicle => vehicle.id === id);
            if (existingVehicle) {
                Object.assign(existingVehicle, action.payload);
            }
        },
        deleteVehicle: (state, action) => {
            const { id } = action.payload;
            return state.filter(vehicle => vehicle.id !== id);
        }
    }
});

export const { addVehicle, updateVehicle, deleteVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;
