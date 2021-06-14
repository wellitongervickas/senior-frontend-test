import { v4 as uuid } from "uuid";
const idGenerator = () => uuid().slice(0, 10);

export default idGenerator;
