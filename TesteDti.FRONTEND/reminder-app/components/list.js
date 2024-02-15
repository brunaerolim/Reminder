import { convertGlobalDateFormatToBrazilian } from "../utils/date";
import Item from "./item";

export default function List({ date, itens, onRemove }) {
  return (
    <>
      <ul className="list-group mt-2">
        <p className="fs-6">{convertGlobalDateFormatToBrazilian(date)}</p>
        {itens.map(item => <Item key={item.id} name={item.name} id={item.id} onRemove={onRemove} />)}
      </ul>
    </>
  );
}
