const CandidateCard = ({ candidate, onVote, voted }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>{candidate.name}</h3>

      <button onClick={() => onVote(candidate.id)} disabled={voted}>
        Vote
      </button>
    </div>
  );
};

export default CandidateCard;
