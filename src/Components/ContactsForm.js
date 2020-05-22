import React, { useState, useEffect } from 'react';

const ContactsForm = (props) => {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: '',
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == '')
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full Name"
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Mobile"
            name="mobile"
            type="tel"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Address"
          type="text"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == '' ? 'Save' : 'Update'}
          className="btn btn-primary btn-block"
        ></input>
      </div>
    </form>
  );
};

export default ContactsForm;
