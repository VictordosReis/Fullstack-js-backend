import { model, Schema, Document } from 'mongoose';
import { UserInterface } from './User';

export enum StatusEnum {
    OPEN = 'OPEN',
    FINISHED = 'FINISHED'
}

export interface TaskInterface extends Document {
    description: string,
    Status: StatusEnum,
    conclused: Date,
    responsible: UserInterface,
    creation: Date,
}

const TaskSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Descrição obrigatória'],
  },
  status: {
    type: String,
    validate: {
      validator: (value) => {
        if (value === StatusEnum.OPEN || value === StatusEnum.FINISHED) return true;
        // eslint-disable-next-line no-unused-expressions
        return false;
      },
      // eslint-disable-next-line no-template-curly-in-string
      message: (props) => '${props.value} não é um status válido.',
    },
    required: [true, 'Status obrigatório'],
    uppercase: true,
  },
  conslused: {
    type: Date,
    default: Date.now,
  },
  reponsible: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Responsável Obrigatório'],
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});

export default model<TaskInterface>('Task', TaskSchema);
