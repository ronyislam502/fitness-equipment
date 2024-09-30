const ProgressBar = () => {
  return (
    <>
      <progress
        className="progress progress-primary w-56"
        value={0}
        max="100"
      ></progress>
    </>
  );
};

export default ProgressBar;