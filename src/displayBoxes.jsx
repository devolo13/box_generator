const DisplayBoxes = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-start">
      {props.boxes.map((b) => (
        <div key={b} className="m-2" style={{ backgroundColor: b, width: '100px', height: '100px' }} >
          {b}
        </div>
      ))}
    </div>
  );
};

export default DisplayBoxes;
