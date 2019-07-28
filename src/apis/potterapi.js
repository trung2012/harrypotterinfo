import axios from 'axios';

export const KEY = '$2a$10$D.U.hvVbOtzPfYpbSCQ5N.yFSuE.3UB5c.Lb.MhWWhwZjhOfA1TOG';

export default axios.create({ baseURL: 'https://www.potterapi.com/v1' });