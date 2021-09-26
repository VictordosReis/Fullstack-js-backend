import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
public app: express.Application;

public constructor() {
  this.app = express();
  this.app.use(cors());
  this.intMongoose();
  this.connectDatabase();
}

private intMongoose(): void {
  mongoose.set('runValidators', true);
}

private connectDatabase(): void {
  mongoose.connect('mongodb+srv://vreis:59coBuI3hjIavGRQ@cluster0.4ax6l.mongodb.net/fullstack-javascript?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  });
}

public listen(port: number): void {
  this.app.listen(port, () => {
    console.log(`Aplicação iniciada na porta: ${port}`);
  });
}
}

export default App;
