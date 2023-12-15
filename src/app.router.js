import connectDB from '../DB/connection.js';
import { globalErrorHandler } from '../src/services/errorHandling.js';
import AuthRouter from './modules/Auth/auth.router.js';

const initApp = async (app, express) => {
  app.use(express.json());
  connectDB();
  app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Welcome' });
  });
  app.use('/auth', AuthRouter);
  

  app.get('*', (req, res) => {
    return res.status(200).json({ message: 'Page not found' });
  });

  app.use(globalErrorHandler);
};

export default initApp;
