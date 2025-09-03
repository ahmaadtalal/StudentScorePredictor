import React, { useState } from "react";
import "./App.css";

const renderOptions = (options) => {
  return options.map((opt) => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ));
};

function App() {
  const [formData, setFormData] = useState({
    Hours_Studied: 20,
    Attendance: 67,
    Parental_Involvement: 1,
    Access_to_Resources: 1,
    Extracurricular_Activities: 1,
    Sleep_Hours: 7,
    Previous_Scores: 66,
    Motivation_Level: 1,
    Internet_Access: 1,
    Tutoring_Sessions: 1,
    Family_Income: 0,
    Teacher_Quality: 1,
    School_Type: 0,
    Peer_Influence: 2,
    Physical_Activity: 3,
    Learning_Disabilities: 0,
    Parental_Education_Level: 0,
    Distance_from_Home: 0,
    Gender: 0,
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://student-score-predictor-e9fea2e45124.herokuapp.com/predict",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      setPrediction(data.predicted_score); // show modal
    } catch (error) {
      console.error("Error:", error);
      alert("Prediction failed. Make sure the backend is running.");
    }
  };

  const closeModal = () => setPrediction(null);

  return (
    <div className="App">
      <h1>Student Exam Score Predictor</h1>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h2>Numerical Features</h2>
          <div className="input-group">
            <label>
              Hours Studied: <span>{formData.Hours_Studied}</span>
            </label>
            <input
              type="range"
              name="Hours_Studied"
              min="0"
              max="100"
              value={formData.Hours_Studied}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>
              Attendance: <span>{formData.Attendance}</span>
            </label>
            <input
              type="range"
              name="Attendance"
              min="0"
              max="100"
              value={formData.Attendance}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>
              Sleep Hours: <span>{formData.Sleep_Hours}</span>
            </label>
            <input
              type="range"
              name="Sleep_Hours"
              min="0"
              max="24"
              value={formData.Sleep_Hours}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>
              Previous Scores: <span>{formData.Previous_Scores}</span>
            </label>
            <input
              type="range"
              name="Previous_Scores"
              min="0"
              max="100"
              value={formData.Previous_Scores}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>
              Tutoring Sessions: <span>{formData.Tutoring_Sessions}</span>
            </label>
            <input
              type="range"
              name="Tutoring_Sessions"
              min="0"
              max="8"
              value={formData.Tutoring_Sessions}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>
              Physical Activity: <span>{formData.Physical_Activity}</span>
            </label>
            <input
              type="range"
              name="Physical_Activity"
              min="0"
              max="6"
              value={formData.Physical_Activity}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="section">
          <h2>Categorical Features</h2>

          <div className="input-group">
            <label>Parental Involvement:</label>
            <select
              name="Parental_Involvement"
              value={formData.Parental_Involvement}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "Low" },
                { value: 1, label: "Medium" },
                { value: 2, label: "High" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Access to Resources:</label>
            <select
              name="Access_to_Resources"
              value={formData.Access_to_Resources}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "Low" },
                { value: 1, label: "Medium" },
                { value: 2, label: "High" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Extracurricular Activities:</label>
            <select
              name="Extracurricular_Activities"
              value={formData.Extracurricular_Activities}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "No" },
                { value: 1, label: "Yes" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Motivation Level:</label>
            <select
              name="Motivation_Level"
              value={formData.Motivation_Level}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "Low" },
                { value: 1, label: "Medium" },
                { value: 2, label: "High" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Internet Access:</label>
            <select
              name="Internet_Access"
              value={formData.Internet_Access}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "No" },
                { value: 1, label: "Yes" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Family Income:</label>
            <select
              name="Family_Income"
              value={formData.Family_Income}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "Low" },
                { value: 1, label: "Medium" },
                { value: 2, label: "High" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Teacher Quality:</label>
            <select
              name="Teacher_Quality"
              value={formData.Teacher_Quality}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "Poor" },
                { value: 1, label: "Average" },
                { value: 2, label: "Excellent" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>School Type:</label>
            <select
              name="School_Type"
              value={formData.School_Type}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "Public" },
                { value: 1, label: "Private" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Peer Influence:</label>
            <select
              name="Peer_Influence"
              value={formData.Peer_Influence}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "Negative" },
                { value: 1, label: "Neutral" },
                { value: 2, label: "Positive" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Learning Disabilities:</label>
            <select
              name="Learning_Disabilities"
              value={formData.Learning_Disabilities}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "No" },
                { value: 1, label: "Yes" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Parental Education Level:</label>
            <select
              name="Parental_Education_Level"
              value={formData.Parental_Education_Level}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "High School" },
                { value: 1, label: "College" },
                { value: 2, label: "Post Graduate" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Distance from Home:</label>
            <select
              name="Distance_from_Home"
              value={formData.Distance_from_Home}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "Near" },
                { value: 1, label: "Moderate" },
                { value: 2, label: "Far" },
              ])}
            </select>
          </div>

          <div className="input-group">
            <label>Gender:</label>
            <select
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
            >
              {renderOptions([
                { value: 0, label: "Male" },
                { value: 1, label: "Female" },
              ])}
            </select>
          </div>
        </div>

        <button type="submit">Predict Exam Score</button>
      </form>
      {prediction !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>Predicted Exam Score</h2>
            <p>{prediction}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
