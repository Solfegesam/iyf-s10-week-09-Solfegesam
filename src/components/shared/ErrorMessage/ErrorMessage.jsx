function ErrorMessage({ message }) {
  return (
    <div
      style={{
        backgroundColor: "#ffdddd",
        color: "#990000",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;