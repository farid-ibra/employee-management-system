import React, { useState } from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState("")

    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function saveEmployee(e){
        e.preventDefault();
        const employee = {firstName, lastName, email}

        console.log(employee);

    }

  return (
    <div className='container'>
        <br/> <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First name:</label>
                            <input
                                type='text'
                                placeholder='Enter first name'
                                name='firstName'
                                value={firstName}
                                className='form-control'
                                onChange={handleFirstName}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last name:</label>
                            <input
                                type='text'
                                placeholder='Enter last name'
                                name='lastName'
                                value={lastName}
                                className='form-control'
                                onChange={handleLastName}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='password'
                                placeholder='Enter email address'
                                name='email'
                                value={email}
                                className='form-control'
                                onChange={handleEmail}
                            >
                            </input>
                        </div>

                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent