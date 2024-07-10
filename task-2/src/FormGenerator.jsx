import React from 'react';
const FormGenerator = ({ schema }) => {
  if (!schema) return null;

  const renderField = (field) => {
    const { label, attrs } = field;
    switch (attrs.type) {
      case 'text':
        return (
          <div className="mb-3" key={attrs.name}>
            <label className="form-label" htmlFor={attrs.name}>
              {label}
            </label>
            <input
              type="text"
              id={attrs.name}
              name={attrs.name}
              className="form-control"
            />
          </div>
        );
      case 'textarea':
        return (
          <div className="mb-3" key={attrs.name}>
            <label className="form-label" htmlFor={attrs.name}>
              {label}
            </label>
            <textarea
              id={attrs.name}
              name={attrs.name}
              className="form-control"
              rows='3'
            ></textarea>
          </div>
        );
      case 'radio':
        return (
          <div className="mb-3 row justify-content-center" key={attrs.name}>
            <label className="form-label mb-3">
              {label}
            </label>
            <div style={{width:"auto"}}>
              {attrs.variants?.map((variant) => (
                <div key={variant.value} className="form-check mb-1">
                  <input
                    type="radio"
                    name={attrs.name}
                    value={variant.value}
                    className="form-check-input"
                    id={`${attrs.name}-${variant.value}`}
                  />
                  <label 
                    className="form-check-label px-2"
                    htmlFor={`${attrs.name}-${variant.value}`}
                  >
                    {variant.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      case 'checkbox':
        return (
          <div className="mb-3 row justify-content-center" key={attrs.name}>
            <label className="form-label mb-3">
              {label}
            </label>
            <div style={{width: 'auto'}}>
              {attrs.variants?.map((variant) => (
                <div key={variant.value} className="form-check mb-1">
                  <input
                    type="checkbox"
                    name={attrs.name}
                    value={variant.value}
                    className="form-check-input"
                    id={`${attrs.name}-${variant.value}`}
                  />
                  <label className='form-check-label' htmlFor={`${attrs.name}-${variant.value}`}>
                    {variant.label}
                  </label>
                </div>
              ))}
            </div>
            
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form className='badge d-grid py-3 px-5 text-wrap bg-dark justify-content-center' style={{color: 'white', width:'fit-content', marginLeft:"auto", marginRight:'auto'}}>
      <h1 className="fs-1 text-uppercase">{schema.title}</h1>
      {schema.description && <p className="mb-4">{schema.description}</p>}
      {schema.fields.map(renderField)}
      <div className="col">
        {schema.buttons?.includes('submit') && (
          <button
            type="submit"
            className='btn btn-primary md-3'
          >
            Submit
          </button>
        )}
        {schema.buttons?.includes('clear') && (
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn btn-secondary ms-3"
          >
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default FormGenerator;
