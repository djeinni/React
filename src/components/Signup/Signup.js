import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function Signup(  validationSchema = {}
) {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [historyList, setHistoryList] = useState([]);
  const { register, errors, setError, clearError } = useForm();

return (
  <div class="card">
    <div class="card-header">
      Sign Up!
          </div>
    <div class="card-body">
      <form >
        <div class="form-group row mb-2">
          <label class="col-md-2 col-form-label"
            for="firstNameId">First Name</label>
          <div class="col-md-8">
            <input class="form-control"
              id="firstNameId"
              type="text"
              name="fname"
              placeholder="First Name (required)"
              required
              minLength="3" onChange={async e => {
                const value = e.target.value;
                await sleep(1000);
                if (value !== "") {
                  clearError("fname");
                } else {
                  setError(
                    "fname",
                    "notMatch",
                    "please choose a correct first name"
                  );
                }
              }}
              ref={register({ required: true })}
              />
                    {errors.fname && errors.fname.message}
          </div>
        </div>

        <div class="form-group row mb-2">
          <label class="col-md-2 col-form-label"
            for="lastNameId">Last Name</label>
          <div class="col-md-8">
            <input class="form-control"
              id="lastNameId"
              type="text"
              name="lname"
              value={lname}
              placeholder="Last Name (required)"
              minlength="3" onChange={async e => {
                const value = e.target.value;
                await sleep(1000);
                if (value !== "") {
                  clearError("lname");
                } else {
                  setError(
                    "lname",
                    "notMatch",
                    "please choose a correct last name"
                  );
                }
              }}
              ref={register({ required: true })}
              />
                    {errors.lname && errors.fname.message}
          </div>
          {fname}
        </div>

         <div class="form-group row mb-2">
          <label class="col-md-2 col-form-label"
            for="firstNameId">Date</label>
          <div class="input-group date col-md-8">
            <input class="form-control"
              id="dateId"
              type="text"
              placeholder="Date (required)"
              required />
            <div class="input-group-addon">
              <div class="input-group-text">Select date on this Input<DatePicker onChange={async e => {
                const value = e.target.value;
                await sleep(1000);
                if (value !== "") {
                  clearError("fname");
                } else {
                  setError(
                    "fname",
                    "notMatch",
                    "please choose a correct first name"
                  );
                }
              }}
              ref={register({ required: true })}
              />
                    {errors.fname && errors.fname.message}
              </div>
            </div>
          </div>
        </div>

        <div class="form-group row mb-2">

          <label for="inputPassword" class="col-sm-2 col-form-label" for="lastNameId">Password</label>
          <div class="col-md-8">
            <input class="form-control"
              id="passwordId"
              type="text"
              placeholder="Password (required)" onChange={async e => {
                const value = e.target.value;
                await sleep(1000);
                if (value.error) {
                  clearError("Password");
                } else {
                  setError(
                    "Password (required)",
                    "notMatch",
                    "please choose a correct Password (required)"
                  );
                }
              }}
              ref={register({ required: true })}
              />
                    {errors.fname && errors.fname.message}
          </div>
        </div>

        <div class="form-group row mb-2">
          <label class="col-md-2 col-form-label"
            for="emailId">Email</label>
          <div class="col-md-8">
            <input class="form-control"
              id="emailId"
              type="email"
              placeholder="Email (required)"
              required
              email onChange={async e => {
                const value = e.target.value;
                await sleep(1000);
                if (value !== "") {
                  clearError("fname");
                } else {
                  setError(
                    "fname",
                    "notMatch",
                    "please choose a correct first name"
                  );
                }
              }}
              ref={register({ required: true })}
              />
                    {errors.fname && errors.fname.message}
          </div>
        </div>
      </form>
    </div>
  </div>
);
}