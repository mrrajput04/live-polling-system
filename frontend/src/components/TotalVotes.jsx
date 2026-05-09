const TotalVotes = ({ total }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Total Votes: {total}</h2>
    </div>
  );
};

export default TotalVotes;
