import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewReceiptionist.css";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";

function ViewReceiptionist() {
  const [receptionists, setReceptionists] = useState([]);
  const navigate = useNavigate();

      useEffect(() => {
        if (!sessionStorage.getItem("userName")) {
          navigate("/");
        } else if (sessionStorage.getItem("userRole") === "DOCTOR") {
          navigate("/doctor");
        } else if (sessionStorage.getItem("userRole") === "PATIENT") {
          navigate("/");
        } else if (sessionStorage.getItem("userRole") === "ADMIN") {
          navigate("/admin");
        }
        else if (sessionStorage.getItem("userRole") === "RECEPTIONIST") {
          navigate("/receiptionist");
        }
      }, [navigate]);

  // Fetch receptionists on component mount
  useEffect(() => {
    fetchReceptionists();
  }, []);

  // Function to fetch receptionists
  const fetchReceptionists = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}` },
      };

      const response = await axios.get("http://localhost:8080/admin/getAllReceptionist", config);
      setReceptionists(response.data);
    } catch (error) {
      console.error("Error fetching receptionists:", error);
    }
  };

  // Function to handle edit
  const handleEdit = (id) => {
    navigate(`/admin/editreceptionist/${id}`); // Navigate to edit page with ID
  };

  // Function to handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this receptionist?")) return;

    try {
      const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}` },
      };

      await axios.delete(`http://localhost:8080/admin/deleteReceptionist/${id}`, config);
      alert("Receptionist deleted successfully!");
      setReceptionists(receptionists.filter((rec) => rec.id !== id)); // Update UI
    } catch (error) {
      console.error("Error deleting receptionist:", error);
      alert("Failed to delete receptionist!");
    }
  };

  return (
    <Admin>
      <div className="view-receptionist-container">
        <h2>View Receptionists</h2>
        <table className="receptionist-table">
          <thead>
            <tr>
              <th>Receptionist Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {receptionists.length > 0 ? (
              receptionists.map((rec) => (
                <tr key={rec.id}>
                  <td>{rec.name}</td>
                  <td>{rec.email}</td>
                  <td>{rec.phone}</td>
                  <td>{rec.password}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(rec.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(rec.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No receptionists available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Admin>
  );
}

export default ViewReceiptionist;
