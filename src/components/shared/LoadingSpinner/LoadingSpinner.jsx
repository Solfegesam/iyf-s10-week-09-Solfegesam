function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h3>{text}</h3>
    </div>
  );
}

export default LoadingSpinner;