// Update.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateVehicle } from './VehicleReducer';

function Update() {
    const { id } = useParams();
    const vehicles = useSelector((state) => state.vehicles);
    const vehicleToUpdate = vehicles.find(vehicle => vehicle.id === Number(id));

    // Verificăm dacă vehicleToUpdate este definit înainte de a accesa proprietățile sale
    if (!vehicleToUpdate) {
        return <div>Vehiculul nu a fost găsit!</div>;
    }

    const [registrationNumber, setRegistrationNumber] = useState(vehicleToUpdate.registrationNumber);
    const [chassisNumber, setChassisNumber] = useState(vehicleToUpdate.chassisNumber);
    const [brand, setBrand] = useState(vehicleToUpdate.brand);
    const [model, setModel] = useState(vehicleToUpdate.model);
    const [manufactureYear, setManufactureYear] = useState(vehicleToUpdate.manufactureYear);
    const [engineType, setEngineType] = useState(vehicleToUpdate.engineType);
    const [engineCapacity, setEngineCapacity] = useState(vehicleToUpdate.engineCapacity);
    const [horsepower, setHorsepower] = useState(vehicleToUpdate.horsepower);
    const [kilowatts, setKilowatts] = useState(vehicleToUpdate.kilowatts);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateVehicle({
            id: Number(id),
            registrationNumber,
            chassisNumber,
            brand,
            model,
            manufactureYear,
            engineType,
            engineCapacity,
            horsepower,
            kilowatts
        }));
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 bordered bg-secondary text-white p-5'>
                <h3>Update vehicle</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="registrationNumber">Registration Number:</label>
                        <input type="text" placeholder='enter registration number' name='registrationNumber' className='form-control'
                            value={registrationNumber} onChange={e => setRegistrationNumber(e.target.value)} />
                    </div>
                    {/* Add similar input fields for other vehicle information */}
                    <br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
