import {combineReducers} from 'redux';

import {reducer as gasReducer} from "../modules/gas_stations/index"
import {reducer as homeReducer} from "../modules/home/index"
import {reducer as profileReducer} from "../modules/profile/index"

const rootReducer = combineReducers({gasReducer, homeReducer, profileReducer});

export default rootReducer;