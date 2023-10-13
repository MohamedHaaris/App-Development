import React, { useState, useEffect } from 'react';
import { getStudents, deleteStudents } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../assets/css/View.css';
const View = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

    fetchStudents();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/product/edit/${id}`);
  };

  const handleDelete = async (candidateId) => {
    try {
      const res = await deleteStudents(candidateId);
      if (res.status === 200) {
        toast.success(`Deleted Successfully !`, {
          position: 'bottom-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        fetchStudents(); // Fetch students after successful deletion
      }
    } catch (error) {
      console.log(error);
    }
  };

  const routeAdd = () => {
    navigate('/admin/product/add');
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center' }}>Students Details</h2>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
            <th style={{ textAlign: 'left' }}>Sno</th>
            <th style={{ textAlign: 'left' }}>FirstName</th>
            <th style={{ textAlign: 'left' }}>LastName</th>
            <th style={{ textAlign: 'left' }}>Gender</th>
            <th style={{ textAlign: 'left' }}>Age</th>
            <th style={{ textAlign: 'left' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.candidateId}>
                <td>{student.candidateId}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.gender}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>
        <button onClick={() => handleDelete(student.candidateId, student.email)}>Delete</button>
      </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;
