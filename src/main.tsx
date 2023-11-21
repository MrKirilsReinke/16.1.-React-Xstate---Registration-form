import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import FormikApp from './assets/components/Form/FormApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormikApp />
  </StrictMode>
);
