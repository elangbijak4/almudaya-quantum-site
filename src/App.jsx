import React from 'react'

function App() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <img src="/almudaya-quantum-site/quantum_cube.png" alt="Quantum Node" className="floating-cube" />
          <h1 className="title-glow">Almudaya Quantum</h1>
          <p className="subtitle">
            The world's first experimental Post-Quantum Ethereum-like modular blockchain. 
            Secured by NIST-standard CRYSTALS-Dilithium lattice-based cryptography, built for the Q-Day era.
          </p>
          <div className="action-buttons">
            <a href="https://github.com/elangbijak4/almudaya-quantum-blockchain" target="_blank" rel="noreferrer" className="cta-button">
              View on GitHub
            </a>
            <a href="https://www.npmjs.com/package/almudaya-quantum-blockchain" target="_blank" rel="noreferrer" className="secondary-button">
              NPM Package
            </a>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="terminal-section">
        <div className="container">
          <h2 className="section-title">Install & Run Instantly</h2>
          <p className="section-subtitle">Experience the post-quantum blockchain node right in your terminal. No complex setup required.</p>
          
          <div className="terminal-mockup">
            <div className="terminal-header">
              <div className="terminal-dot dot-red"></div>
              <div className="terminal-dot dot-yellow"></div>
              <div className="terminal-dot dot-green"></div>
            </div>
            <div className="terminal-body">
              <div>
                <span className="prompt">~ $</span>
                <span className="command">npx -y almudaya-quantum-blockchain</span>
              </div>
              <div className="output">
                <br/>
                <span className="output-success">✔</span> Booting Almudaya Quantum Node (v1.0.0)<br/>
                <span className="output-success">✔</span> Injecting DilithiumSignatureProvider...<br/>
                <span className="output-success">✔</span> Initializing Post-Quantum Object Store...<br/>
                <br/>
                [INFO] Generating 20 Dilithium2 Demo Accounts...<br/>
                [INFO] RPC Server listening on <span className="output-highlight">http://127.0.0.1:8545/</span><br/>
                <br/>
                Ready to process quantum-resistant transactions!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <h2 className="section-title">Quantum-Resistant Architecture</h2>
        <div className="features-grid">
          <div className="glass-panel">
            <div className="feature-icon">🛡️</div>
            <h3>Lattice-Based Security</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Powered by NIST FIPS 204 CRYSTALS-Dilithium algorithm. Immune to Shor's algorithm and future quantum computer attacks.
            </p>
          </div>
          <div className="glass-panel">
            <div className="feature-icon">🧩</div>
            <h3>Modular Design</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Built with Dependency Injection (Awilix). Replace any core component like VM, Storage, or Signature Provider effortlessly.
            </p>
          </div>
          <div className="glass-panel">
            <div className="feature-icon">🌐</div>
            <h3>Web3 RPC Compatible</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Retains Ethereum-like addressing (0x...) and standard JSON-RPC endpoints for seamless integration with existing tools.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Almudaya Quantum Blockchain. Built by <a href="https://github.com/elangbijak4" target="_blank" rel="noreferrer">elangbijak4</a>.</p>
        </div>
      </footer>
    </>
  )
}

export default App
