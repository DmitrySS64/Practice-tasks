import './App.css';
import FormGenerator from './FormGenerator';
import { SelectFormTest, JsonFileReader} from './JsonFileReader';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function App() {
  const text = [
    'Приложение генератор форм',
    'Необходимо реализовать приложение, которое будет генерировать формы на основе предоставленные `json файлов`',
    'Приложение должно быть реализованно на `JavaScript` без использования стороних библиотек, разрешено использование `TypeScript`',
    'Для верстки можно использовать `tailwindcss` или `bootstrap`'
  ]

  const [schema, setSchema] = useState(null)
  const handleFileLoad = (loadedSchema) => {
    setSchema(loadedSchema);
  };
  return (
    <div className="App">
      <div 
        className=""
      >
        <div className='badge bg-primary text-wrap mb-3 px-5 py-3'>
          {text.map((t)=>{
            return <p className='fs-6'>{t}</p>
          })}
        </div>
        
        <JsonFileReader onFileLoad={handleFileLoad} />
        <SelectFormTest onFileLoad={handleFileLoad} />
        <FormGenerator schema={schema} />
      </div>
    </div>
  );
}

export default App;
