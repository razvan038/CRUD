// Create.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addVehicle } from './VehicleReducer';

function Create() {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [chassisNumber, setChassisNumber] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [manufactureYear, setManufactureYear] = useState('');
    const [engineType, setEngineType] = useState('');
    const [engineCapacity, setEngineCapacity] = useState('');
    const [horsepower, setHorsepower] = useState('');
    const [kilowatts, setKilowatts] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addVehicle({
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
                <h3>Add new vehicle</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="registrationNumber">Registration Number:</label>
                        <input type="text" placeholder='enter registration number' name='registrationNumber' className='form-control'
                            onChange={e => setRegistrationNumber(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="chassisNumber">Chassis Number:</label>
                        <input type="text" placeholder='enter chassis number' name='chassisNumber' className='form-control'
                            onChange={e => setChassisNumber(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="brand">Brand:</label>
                        <input type="text" placeholder='enter brand' name='brand' className='form-control'
                            onChange={e => setBrand(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="model">Model:</label>
                        <input type="text" placeholder='enter model' name='model' className='form-control'
                            onChange={e => setModel(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="manufactureYear">Manufacture Year:</label>
                        <input type="text" placeholder='enter manufacture year' name='manufactureYear' className='form-control'
                            onChange={e => setManufactureYear(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="engineType">Engine Type:</label>
                        <input type="text" placeholder='enter engine type' name='engineType' className='form-control'
                            onChange={e => setEngineType(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="engineCapacity">Engine Capacity:</label>
                        <input type="text" placeholder='enter engine capacity' name='engineCapacity' className='form-control'
                            onChange={e => setEngineCapacity(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="horsepower">Horsepower:</label>
                        <input type="text" placeholder='enter horsepower' name='horsepower' className='form-control'
                            onChange={e => setHorsepower(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="kilowatts">Kilowatts:</label>
                        <input type="text" placeholder='enter kilowatts' name='kilowatts' className='form-control'
                            onChange={e => setKilowatts(e.target.value)} />
                    </div>
                    <br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;
