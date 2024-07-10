import React from 'react';
import formTest1 from './data/form-test-1.json'
import formTest2 from './data/form-test-2.json'
import formTest3 from './data/form-test-3.json'

export const JsonFileReader = ({ onFileLoad }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      onFileLoad(JSON.parse(contents));
    };

    reader.readAsText(file);
  };

  return (
    <div className='d-grid mb-3 mx-5 justify-content-center' style={{width:'auto'}}>
      <label className='form-label'>Open the form file</label>
      <input id="fromFile" type="file" className='form-control' accept=".json" onChange={handleFileUpload} />
    </div>
  );
};

export const SelectFormTest = ({ onFileLoad }) => {
  const handleSelect = (event) => {
    const selectedTest = event.target.value;
    switch (selectedTest) {
      case 'test1':
        onFileLoad(formTest1);
        break;
      case 'test2':
        onFileLoad(formTest2);
        break;
      case 'test3':
        onFileLoad(formTest3);
        break;
      default:
        break;
    }
  };

  return (
    <div className='d-grid mb-3 mx-5 justify-content-center'>
      <label htmlFor="selectFormTest" className="form-label">
        Select Test Form:
      </label>
      <select id="selectFormTest" className="form-select" onChange={handleSelect}>
        <option value="">--Select a form--</option>
        <option value="test1">Form Test 1</option>
        <option value="test2">Form Test 2</option>
        <option value="test3">Form Test 3</option>
      </select>
    </div>
  );
};