// Home.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteVehicle } from './VehicleReducer'; 

function Home() {
    const vehicles = useSelector((state) => state.vehicles); 
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteVehicle({ id }));
    }

    return (
        <div className='container'>
            <h2>Vehicle Management System</h2>
            <Link to="/create" className='btn btn-success my-3'>Add Vehicle +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Registration Number</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle) => (
                        <tr key={vehicle.id}>
                            <td>{vehicle.id}</td>
                            <td>{vehicle.registrationNumber}</td>
                            <td>{vehicle.brand}</td>
                            <td>{vehicle.model}</td>
                            <td>
                                <Link to={`/edit/${vehicle.id}`} >
                                    <button className='btn btn-primary mx-2'>Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(vehicle.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
