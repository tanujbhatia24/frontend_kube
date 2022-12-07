import React from 'react';
import "./userRegistrationStyle.css"
export default function UserRegistration() {
  return (
    <>


      <div class="mainForm">
        <div class="container">
          <div class="title">New User Registration</div>
          <div class="content">
            <form action="#">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Full Name</span>
                  <input type="text" placeholder="Enter the name of new User" required />
                </div>
                <div class="input-box">
                  <span class="details">Username</span>
                  <input type="text" placeholder="Enter username" required />
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" placeholder="Enter email" required />
                </div>
                <div class="input-box">
                  <span class="details">Temp Password</span>
                  <input type="text" placeholder="Enter temporary password" required />
                </div>
                <div class="input-box">
                  <span class="details">Phone Number</span>
                  <input type="text" placeholder="Enter your number" required />
                </div>
                {/* <div class="input-box">
                  <span class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, optio odit
                    consectetur tempore laudantium quibusdam nemo quam eos accusamus...</span>

                </div> */}
              </div>
              <div class="emp-details">
                {/* <span class="gender-title">Select the User type:</span> */}
                <div class="category">
                  <label for="cars">Select the User type:</label>
                  <select name="cars" id="cars">
                    <option value="careerServices">CareerServices</option>
                    <option value="faculty">Faculty</option>
                    <option value="student">Student</option>
                    
                  </select>
                </div>
              </div>
              <div class="button">
                <input type="submit" value="Register User" />
              </div>
            </form>
          </div>
        </div>
      </div>





    </>
  )
}


