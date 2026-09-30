import Link from "next/link";

const reports = [
  {
    id: "demo",
    name: "123 Main Street",
    address: "Austin, Texas",
    status: "Ready",
    statusClass: "ready",
    date: "Sep 30, 2026",
  },
  {
    id: "park-avenue",
    name: "458 Park Avenue",
    address: "Dallas, Texas",
    status: "Draft",
    statusClass: "",
    date: "Sep 29, 2026",
  },
  {
    id: "cedar",
    name: "82 Cedar Lane",
    address: "Houston, Texas",
    status: "Processing",
    statusClass: "processing",
    date: "Sep 28, 2026",
  },
];

export default function HomePage() {
  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">AI</div>
          Property Reports
        </div>
        <Link className="button button-primary" href="/reports/new">
          + New Report
        </Link>
      </header>

      <main className="main">
        <div className="row">
          <div>
            <div className="eyebrow">AI-assisted reporting</div>
            <h1 className="title">Property reports, without manual data entry.</h1>
            <p className="subtitle">
              Upload source documents, extract verified property facts, generate a
              structured draft, and keep a human in control before approval.
            </p>
          </div>
        </div>

        <section className="card table-wrap">
          <div className="table-head">
            <div>Property</div>
            <div>Status</div>
            <div>Updated</div>
            <div></div>
          </div>

          {reports.map((report) => (
            <div className="table-row" key={report.id}>
              <div>
                <div className="property-name">{report.name}</div>
                <div className="property-address">{report.address}</div>
              </div>
              <div>
                <span className={`status ${report.statusClass}`}>
                  {report.status}
                </span>
              </div>
              <div className="property-address">{report.date}</div>
              <div>
                <Link className="arrow-link" href={`/reports/${report.id}`}>
                  →
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
