import React, { useState } from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import Swal from "sweetalert2";

const FindCarForm = () => {
  const [faddress, setfaddress] = useState("");
  const [taddress, settaddress] = useState("");
  const [date, setdate] = useState("");
  const [jtime, setjtime] = useState("");
  const [ac, setac] = useState("");

  // const success = () => {

  // };

  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            value={faddress}
            onChange={(e) => {
              setfaddress(e.currentTarget.value);
            }}
            type="text"
            placeholder="From address"
            // required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            value={taddress}
            onChange={(e) => {
              settaddress(e.currentTarget.value);
            }}
            type="text"
            placeholder="To address"
            // required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            value={date}
            onChange={(e) => {
              setdate(e.currentTarget.value);
            }}
            type="date"
            placeholder="Journey date"
            // required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            // required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select
            onChange={(e) => {
              setac(e.currentTarget.value);
            }}
          >
            <option value="AC">AC Car</option>
            <option value="Non AC">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button
            onClick={() => {
              Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
              });
            }}
            className="btn find__car-btn"
          >
            Find Car
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
