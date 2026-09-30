import Link from "next/link";

export default function NewReportPage() {
  return (
    <div className="shell">
      <header className="topbar">
        <Link className="brand" href="/">
          <div className="brand-mark">AI</div>
          Property Reports
        </Link>
        <Link className="button button-secondary" href="/">
          Back to dashboard
        </Link>
      </header>

      <main className="main">
        <div className="eyebrow">New report</div>
        <h1 className="title">Create a property workspace.</h1>
        <p className="subtitle">
          Start with the basic property details. Documents and AI extraction come
          in the next step.
        </p>

        <section className="card form-card">
          <div className="field">
            <label className="label" htmlFor="property-name">
              Property name
            </label>
            <input
              className="input"
              id="property-name"
              placeholder="123 Main Street"
              defaultValue="123 Main Street"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="property-address">
              Property address
            </label>
            <input
              className="input"
              id="property-address"
              placeholder="Austin, Texas"
              defaultValue="Austin, Texas"
            />
          </div>

          <div className="form-actions">
            <Link className="button button-secondary" href="/">
              Cancel
            </Link>
            <Link className="button button-primary" href="/reports/demo">
              Create report
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
