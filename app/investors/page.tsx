import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon } from "@/components/Icons";
import { company } from "@/lib/site";

export const metadata = {
  title: "Investors — AGK Fire",
  description:
    "Two early ideas for LLMs that run on CPU — what is proven, what is not, and what each idea cannot do.",
};

const ideaOneStats = [
  { value: "278M", label: "Parameters per model" },
  { value: "~285 MB", label: "Model file (GGUF Q8_0)" },
  { value: "2", label: "Models live on CPU today" },
  { value: "1,024", label: "Token context window" },
] as const;

const ideaTwoStats = [
  { value: "~75%", label: "Tool-call accuracy, 7B models" },
  { value: "~68%", label: "Tool-call accuracy, 1.5B models" },
  { value: "~40%", label: "4 tool steps at 80% each" },
  { value: "0", label: "Publish tools, by design" },
] as const;

export default function InvestorsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section--ink">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">Investors</span>
              <h2 className="h2">Small models, ordinary hardware.</h2>
              <p className="lede">
                Two ideas for LLMs that run on CPU, not in a GPU data centre.
                Both are early. Both are grounded in things already running on
                our own server — and this page says plainly what is proven,
                what is not, and what each idea cannot do.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--paper">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">Read this first</span>
              <h2 className="h2">An honest page, on purpose.</h2>
              <p className="lede">
                No projections live on this page. No valuation, no round size,
                no forecast, no market-size chart. If you want numbers, ask us
                — we will show you the evals, the live sites, and the code.
              </p>
            </div>

            <div className="grid grid--2">
              <Reveal>
                <article className="card">
                  <span className="venture__kicker">Proven</span>
                  <h3 className="h3">What already works</h3>
                  <p>
                    Two 278M-parameter models, fine-tuned and serving live on
                    CPU. Two retrieval sites answering from real sources. A
                    decision-model API already running on CPU. These are
                    running systems, not slides.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={70}>
                <article className="card">
                  <span className="venture__kicker">Not proven</span>
                  <h3 className="h3">What does not exist yet</h3>
                  <p>
                    Anything bigger than 278M on CPU. A newsroom model that
                    drafts publishable copy. Any revenue, any market, any
                    timeline. Both ideas below are early, and the second one
                    is still only a written sketch.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">Idea 01 — In build</span>
              <h2 className="h2">
                A family of small models that run on CPU.
              </h2>
              <p className="lede">
                Task-specific models, small enough to run on an ordinary
                server CPU — no GPU farm, no per-token API bill, and data that
                never has to leave our own machine. Telugu verse is the proof:
                two 278M models already finish a poem or a song from its first
                line, live, on CPU.
              </p>
            </div>

            <div className="stats">
              {ideaOneStats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="stat__value">{stat.value}</div>
                  <div className="stat__label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid--2">
              <Reveal>
                <article className="card">
                  <span className="venture__kicker">What is proven</span>
                  <h3 className="h3">Trained, shipped, serving</h3>
                  <p>
                    The poem model trained in 1,539 steps, about two hours on
                    a free Kaggle T4, final loss 2.58. The song model took 126
                    steps, about eighteen minutes, loss 2.88 down to 2.45.
                    Both export to GGUF, run under llama.cpp in Docker on our
                    server, and answer live at poems.socialnews.xyz and
                    songs.socialnews.xyz. Training at this scale cost no GPU
                    rental at all — the work was data, eval, and serving.
                    Sampling settings (temperature 0.8, top-p 0.9, repetition
                    penalty 1.15) are what make the output usable.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={70}>
                <article className="card">
                  <span className="venture__kicker">What it cannot do</span>
                  <h3 className="h3">The ceiling, stated plainly</h3>
                  <p>
                    On 40 held-out poems the fine-tuned model recalled exactly
                    zero verbatim — it learns style and form, not unseen text.
                    That is a real ceiling, not a footnote. Long coherent prose
                    is the wall: a 1,024-token context, stories that repeat
                    after about 150 words, logic that slips. Greedy decoding
                    loops. And CPU inference is slow per token — fine for
                    short outputs, slow for long ones.
                  </p>
                </article>
              </Reveal>
            </div>

            <div className="head-block">
              <h3 className="h3">What money would do</h3>
              <p className="lede">
                Bigger small models in the 1B class — untested on our CPU so
                far, so that is an experiment, not a promise. More languages
                and domains, a real eval harness, serving hardened beyond a
                single box, and data licensed properly: film lyrics are
                copyrighted, so our song data stays private and research-only.
              </p>
              <div className="chips">
                <span className="chip">llama.cpp</span>
                <span className="chip">GGUF</span>
                <span className="chip">Docker</span>
                <span className="chip">Kaggle free tier</span>
                <span className="chip">Hugging Face</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--paper">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">Idea 02 — Sketch only</span>
              <h2 className="h2">
                A newsroom model that drafts, never publishes.
              </h2>
              <p className="lede">
                Three small servers: feeds for what is new, knowledge for
                semantic search over the archive with a duplicate check, and
                drafts for where the copy goes. Draft-only by design — no
                publish tool, a human reviews every draft. Written as a sketch
                in November 2026; not built, and parked until we choose to
                build it.
              </p>
            </div>

            <div className="stats">
              {ideaTwoStats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="stat__value">{stat.value}</div>
                  <div className="stat__label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid--2">
              <Reveal>
                <article className="card">
                  <span className="venture__kicker">What is proven</span>
                  <h3 className="h3">The retrieval half already runs</h3>
                  <p>
                    The grounded-answers half of this idea is live today:
                    Sanatana Dharma (448 chunks) and Vemana (572 poems) answer
                    only from retrieved passages, citing the exact page or poem
                    number. The sketch itself is written — three servers,
                    draft-only, no publish tool — in our small-mcp-core
                    prototype. The drafting half has not been built.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={70}>
                <article className="card">
                  <span className="venture__kicker">What it cannot do</span>
                  <h3 className="h3">The bottleneck is reliability</h3>
                  <p>
                    Small models are unreliable tool users: about 75% per tool
                    call at 7B, about 68% at 1.5B, and a cliff below that.
                    Four tool steps at 80% each is about 40% end-to-end — that
                    is the bottleneck, and it is why the design is draft-only.
                    Without retrieval grounding a CPU model drafting news would
                    hallucinate, and it cannot replace reporters or verify
                    facts on its own.
                  </p>
                </article>
              </Reveal>
            </div>

            <div className="head-block">
              <h3 className="h3">What money would do</h3>
              <p className="lede">
                Build the knowledge server first — the smallest test, search
                plus duplicate check over the archive — then an eval harness,
                then feeds, then drafts, in that order. Each step is gated on
                the one before it working.
              </p>
              <div className="chips">
                <span className="chip">Retrieval grounding</span>
                <span className="chip">MCP</span>
                <span className="chip">Draft-only</span>
                <span className="chip">Human review</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">Risks</span>
              <h2 className="h2">What could make this fail.</h2>
              <p className="lede">
                Five risks, in plain language. None of them is hidden in a
                footnote.
              </p>
            </div>

            <div className="grid grid--2">
              <Reveal>
                <article className="card">
                  <span className="venture__kicker">Risk 01</span>
                  <h3 className="h3">Frontier labs move fast</h3>
                  <p>
                    Open-weight models improve every few months. A 278M model
                    is not a moat — the advantage, if any, is in the data,
                    the evals, and the serving, not the weights.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={70}>
                <article className="card">
                  <span className="venture__kicker">Risk 02</span>
                  <h3 className="h3">Small models hallucinate</h3>
                  <p>
                    Grounding and human review are load-bearing, not optional.
                    Any use without retrieval or review will produce confident
                    wrong answers.
                  </p>
                </article>
              </Reveal>
              <Reveal>
                <article className="card">
                  <span className="venture__kicker">Risk 03</span>
                  <h3 className="h3">CPU is a ceiling</h3>
                  <p>
                    Bigger models get slower on CPU, not just better. There is
                    a size where the idea stops working, and we have not found
                    it yet.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={70}>
                <article className="card">
                  <span className="venture__kicker">Risk 04</span>
                  <h3 className="h3">Data licensing</h3>
                  <p>
                    Song lyrics are copyrighted; news text belongs to
                    publishers. Some data can only ever be private and
                    research-only, which limits what can be shipped.
                  </p>
                </article>
              </Reveal>
              <Reveal>
                <article className="card">
                  <span className="venture__kicker">Risk 05</span>
                  <h3 className="h3">Distribution is the hard part</h3>
                  <p>
                    Building the model is the easy half. Getting anyone to
                    use it — in a newsroom, on a device, in a language the big
                    labs ignore — is the work that decides whether this
                    matters.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section section--ink">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">Talk to us</span>
              <h2 className="h2">Bring your own diligence.</h2>
              <p className="lede">
                We will show you the evals, the live sites, and the code —
                including the evals that came back zero. That is the point of
                this page.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href="/contact">
                  Contact us
                  <ArrowUpRightIcon />
                </a>
                <a className="btn btn--ghost" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </div>
              <p className="muted">
                See the work behind this page:{" "}
                <a href="https://telugu.socialnews.xyz" target="_blank" rel="noopener noreferrer">
                  Telugu AI
                </a>
                {" · "}
                <a href="https://github.com/agk4444/telugu-poem-model" target="_blank" rel="noopener noreferrer">
                  poem model
                </a>
                {" · "}
                <a href="https://github.com/agk4444/telugu-song-model" target="_blank" rel="noopener noreferrer">
                  song model
                </a>
                {" · "}
                <a href="https://github.com/agk4444/small-mcp-core" target="_blank" rel="noopener noreferrer">
                  news-model sketch
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter year={new Date().getFullYear()} />
    </>
  );
}
