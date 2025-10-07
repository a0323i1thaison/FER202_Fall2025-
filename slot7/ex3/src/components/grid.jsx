export default function Grid() {
    return (<div className="container text-center">
      {/* Row 1 */}
      <div className="row mb-2">
        <div className="col bg-secondary border text-white">First col</div>
        <div className="col bg-secondary border text-white">Second col</div>
      </div>

      {/* Row 2 */}
      <div className="row mb-2">
        <div className="col bg-secondary border text-white">col</div>
        <div className="col bg-secondary border text-white">col</div>
        <div className="col bg-secondary border text-white">col</div>
      </div>

      {/* Row 3 */}
      <div className="row mb-2">
        <div className="col bg-secondary border text-white">col</div>
        <div className="col bg-secondary border text-white">col</div>
        <div className="col bg-secondary border text-white">col</div>
        <div className="col bg-secondary border text-white">col</div>
      </div>
    </div>
  );
}