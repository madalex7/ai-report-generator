import Link from "next/link";

const documents = [
  ["purchase-agreement.pdf", "Purchase agreement · 1.8 MB"],
  ["appraisal.pdf", "Property appraisal · 3.2 MB"],
  ["property-details.pdf", "Property details · 940 KB"],
];

const facts = [
  ["Purchase price", "$750,000"],
  ["Purchase date", "May 12, 2025"],
  ["Property type", "Commercial office"],
  ["Building size", "4,280 sq ft"],
];

export default function ReportWorkspacePage() {
  return (
    <div className="shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <div className="brand-mark">AI</div>
          Property Reports
        </Link>
        <Link className="button button-secondary" href="/">
          Dashboard
        </Link>
      </header>

      <main className="main">
        <div className="row">
          <div>
            <div className="eyebrow">Report workspace</div>
            <h1 className="title">123 Main Street</h1>
            <p className="subtitle">Austin, Texas</p>
          </div>
          <span className="status ready">Ready for review</span>
        </div>

        <div className="workspace-grid">
          <section className="card panel">
            <h2 className="panel-title">Source documents</h2>
            <div className="doc-list">
              {documents.map(([name, meta]) => (
                <div className="doc" key={name}>
                  <div>
                    <div className="doc-name">{name}</div>
                    <div className="doc-meta">{meta}</div>
                  </div>
                  <span className="check">✓</span>
                </div>
              ))}
            </div>
          </section>

          <section className="card panel">
            <h2 className="panel-title">Extracted data</h2>
            <div className="fact-list">
              {facts.map(([label, value]) => (
                <div className="fact" key={label}>
                  <div className="fact-label">{label}</div>
                  <div className="fact-value">{value}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="card report-card">
          <div className="row">
            <h2 className="panel-title">AI-generated report</h2>
            <span className="status">Draft</span>
          </div>

          <div className="report-body">
            <p>
              The property at 123 Main Street is a commercial office asset in
              Austin, Texas. The extracted source documents indicate an acquisition
              price of $750,000 and an acquisition date of May 12, 2025.
            </p>

            <h3>Property summary</h3>
            <p>
              The building contains approximately 4,280 square feet of space. All
              values displayed in this draft are intended to be traceable to the
              uploaded source documents before final approval.
            </p>

            <h3>Review note</h3>
            <p>
              This draft is prepared for human review. Missing information should
              remain explicitly marked as unavailable rather than inferred by the
              model.
            </p>
          </div>

          <div className="report-actions">
            <button className="button button-secondary" type="button">
              Regenerate
            </button>
            <button className="button button-primary" type="button">
              Approve report
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
