export default function Item({ id, name, onRemove }) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {name}
        <button type="button" className="btn btn-sm btn-danger" onClick={() => onRemove(id)}>
          X
        </button>
      </li>
    </>
  );
}
