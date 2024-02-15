import ReactInputMask from "react-input-mask";

export default function Input({ name, placeholder, value, onChange, mask }) {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          {name}
        </span>

        <ReactInputMask
          mask={mask}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder={placeholder}
          id="name"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </>
  );
}
