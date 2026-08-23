const NEW_REQUEST_URL =
  'https://github.com/humanfia/KDA-wishlist/issues/new?template=kernel-request.yml';
const ISSUES_URL = 'https://github.com/humanfia/KDA-wishlist/issues';
const KDA_URL = 'https://github.com/mit-han-lab/kernel-design-agents';
const CONTEST_URL =
  'https://github.com/mit-han-lab/mlsys2026-flashinfer-contest';

const submissionItems = [
  ['Reference implementation', 'The known-correct baseline.'],
  ['Representative workloads', 'Shapes and cases that matter in practice.'],
  ['Inputs & outputs', 'Data types, layouts, and expected behavior.'],
  ['Correctness contract', 'Tolerances, edge cases, and validation rules.'],
  ['Target hardware', 'The graphics processing unit (GPU) to optimize for.'],
  ['Benchmark setup', 'A reproducible way to measure performance.'],
  ['Optimization goal', 'Latency, throughput, memory, or another clear target.'],
  ['Constraints', 'Licensing, dependencies, and integration boundaries.'],
];

const workflow = [
  ['01', 'Open a request', 'Share a reproducible FlashInfer Trace definition and explain why the kernel matters.'],
  ['02', 'Community signals', 'Others add a thumbs-up reaction to the GitHub issue and contribute useful workload context.'],
  ['03', 'We research & build', 'Accepted tasks enter a measured loop of analysis, generation, correctness checks, and profiling.'],
  ['04', 'Results return', 'We publish the strongest validated kernel with benchmarks, reproduction steps, and known limits.'],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="KDA Wishlist home">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>KDA <b>Wishlist</b></span>
        </a>
        <div className="nav-links">
          <a href="#process">How it works</a>
          <a href="#submit">Submission guide</a>
          <a href="#faq">FAQ</a>
          <a className="nav-cta" href={ISSUES_URL}>View wishlist <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Community kernel program</div>
          <h1>Submit a definition.<br /><em>Get a solution.</em></h1>
          <p className="hero-lede">
            Turn a reproducible kernel bottleneck into an optimized, validated implementation—researched and built by Kernel Design Agents.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={NEW_REQUEST_URL}>
              Submit a kernel <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-quiet" href={ISSUES_URL}>
              Browse &amp; upvote requests
            </a>
          </div>
          <p className="hero-note">Open process. Public results. Built for real workloads.</p>
        </div>

        <div className="pipeline" aria-label="Kernel Design Agents workflow">
          <div className="pipeline-topline">
            <span>REQUEST / 001</span>
            <span className="live"><i /> ACCEPTING</span>
          </div>
          <div className="pipeline-stage stage-input">
            <span className="stage-index">01</span>
            <div><small>YOU PROVIDE</small><strong>FlashInfer Trace</strong><p>Definition · Workloads · Target</p></div>
          </div>
          <div className="connector"><span>↓</span><small>research · generate · verify</small></div>
          <div className="pipeline-stage stage-process">
            <span className="stage-index">02</span>
            <div><small>WE RUN</small><strong>Kernel Design Agents</strong><p>Explore and benchmark candidates</p></div>
          </div>
          <div className="connector"><span>↓</span><small>select strongest candidate</small></div>
          <div className="pipeline-stage stage-output">
            <span className="stage-index">03</span>
            <div><small>YOU GET</small><strong>Validated kernel</strong><p>Code · Benchmarks · Reproduction</p></div>
            <span className="check" aria-hidden="true">✓</span>
          </div>
        </div>
      </section>

      <section className="definition-strip" aria-label="Program definition">
        <div className="shell definition-grid">
          <p><strong>A kernel</strong> is the small, performance-critical program at the heart of an accelerated machine learning operation.</p>
          <p><strong>KDA Wishlist</strong> turns community-submitted kernel needs into public, reproducible optimization projects.</p>
        </div>
      </section>

      <section className="section shell process-section" id="process">
        <div className="section-heading">
          <p className="section-label">HOW IT WORKS</p>
          <h2>From bottleneck<br />to benchmark.</h2>
        </div>
        <div className="section-intro">
          <p>
            Kernel Design Agents (KDA) are coding systems that research, implement, verify, and iterate on performance-sensitive kernel tasks. Each request gives them a measurable contract—not just an idea.
          </p>
          <a className="text-link" href={KDA_URL}>Explore the KDA research workflow <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="workflow-shell shell">
        <div className="workflow-head">
          <span>PUBLIC REQUEST LIFECYCLE</span>
          <span>GITHUB-MANAGED</span>
        </div>
        <div className="workflow-grid">
          {workflow.map(([number, title, copy]) => (
            <article className="workflow-step" key={number}>
              <div className="step-number">{number}</div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell submit-section" id="submit">
        <div className="submission-copy">
          <p className="section-label">A STRONG SUBMISSION</p>
          <h2>One issue.<br />Everything we need.</h2>
          <p className="large-copy">
            Submit in FlashInfer Trace, a reproducible format that describes what to compute, how to test it, and which workloads matter. Specific requests move faster.
          </p>
          <div className="inline-actions">
            <a className="button button-primary" href={NEW_REQUEST_URL}>Use the request template <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="https://github.com/flashinfer-ai/flashinfer-bench">About FlashInfer Trace <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="requirements" aria-label="Submission requirements">
          <div className="requirements-head">
            <span>REQUEST CHECKLIST</span>
            <span>8 / 8</span>
          </div>
          {submissionItems.map(([title, copy], index) => (
            <div className="requirement" key={title}>
              <span className="req-check" aria-hidden="true">✓</span>
              <div><strong>{title}</strong><small>{copy}</small></div>
              <span className="req-index">{String(index + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="selection">
        <div className="shell selection-grid">
          <div>
            <p className="section-label light">CURATED, NOT A QUEUE</p>
            <h2>Impact sets<br />the priority.</h2>
            <p className="selection-copy">
              Submission does not guarantee selection. We start with a small number of high-impact tasks so every accepted request can become a complete, useful case study.
            </p>
          </div>
          <div className="priority-list">
            <p className="priority-title">WE PRIORITIZE TASKS THAT</p>
            <ul>
              <li><span>01</span>Affect real artificial intelligence systems</li>
              <li><span>02</span>Cover meaningful workload distributions</li>
              <li><span>03</span>Have a clear, measurable bottleneck</li>
              <li><span>04</span>Can benefit multiple users or projects</li>
              <li><span>05</span>Can be evaluated and reproduced publicly</li>
              <li><span>06</span>Have a realistic path to upstream adoption</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="proof shell">
        <div className="proof-kicker">
          <span className="proof-mark">K</span>
          <span>PROVEN IN COMPETITION</span>
        </div>
        <blockquote>
          The workflow behind KDA earned <strong>1st, 2nd, and 3rd place</strong> across the three fully agent-driven tracks in the MLSys 2026 FlashInfer contest.
        </blockquote>
        <a className="text-link" href={CONTEST_URL}>Review the released workflow and results <span aria-hidden="true">↗</span></a>
      </section>

      <section className="section shell faq-section" id="faq">
        <div className="section-heading">
          <p className="section-label">GOOD TO KNOW</p>
          <h2>Before you<br />open an issue.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>How do upvotes work?<span aria-hidden="true">+</span></summary>
            <p>Open the public wishlist, find a request you care about, and add a thumbs-up reaction to the top-level GitHub issue. Comments are best used for new workload evidence or implementation context.</p>
          </details>
          <details>
            <summary>What will a completed task include?<span aria-hidden="true">+</span></summary>
            <p>Depending on the task, results may include an optimized kernel, correctness evidence, baseline comparisons, workload benchmarks, reproduction instructions, environment details, design notes, known limitations, and an upstream-ready contribution.</p>
          </details>
          <details>
            <summary>Will my request and results be public?<span aria-hidden="true">+</span></summary>
            <p>Yes, unless the team explicitly agrees otherwise. Accepted definitions, generated implementations, benchmarks, profiling results, and design summaries may be published. Submitters are credited for their definition and workload.</p>
          </details>
          <details>
            <summary>Why might a request be returned or declined?<span aria-hidden="true">+</span></summary>
            <p>Requests may need revision when they cannot be reproduced, lack a reliable correctness reference, target unsupported hardware, are too vague for automated evaluation, or have unclear licensing.</p>
          </details>
        </div>
      </section>

      <section className="final-cta shell">
        <div>
          <p className="section-label light">YOUR BOTTLENECK, NEXT</p>
          <h2>What should<br />KDA build?</h2>
        </div>
        <div className="final-actions">
          <p>Bring the definition and real workloads. We’ll bring the research loop.</p>
          <a className="button button-acid" href={NEW_REQUEST_URL}>Submit a kernel request <span aria-hidden="true">↗</span></a>
          <a className="final-secondary" href={ISSUES_URL}>Or browse the wishlist and upvote <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top" aria-label="KDA Wishlist home">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>KDA <b>Wishlist</b></span>
        </a>
        <p>A community program for reproducible kernels.</p>
        <div>
          <a href={ISSUES_URL}>GitHub</a>
          <a href={KDA_URL}>KDA Research</a>
          <a href="https://mlsys26.flashinfer.ai/">MLSys 2026</a>
        </div>
      </footer>
    </main>
  );
}
