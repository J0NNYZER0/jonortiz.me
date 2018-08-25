import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';
import contactReducer from './contactReducer';
import educationReducer from './educationReducer';
import experienceReducer from './experienceReducer';
import homeReducer from './homeReducer';
import messageReducer from './messageReducer';
import resumeReducer from './resumeReducer';
import skillsetReducer from './skillsetReducer';
const rootReducer = combineReducers({
  routing: routerReducer,
  contact: contactReducer,
  education: educationReducer,
  experience: experienceReducer,
  home: homeReducer,
  messages: messageReducer,
  resume: resumeReducer,
  skillset: skillsetReducer
});

export default rootReducer;
