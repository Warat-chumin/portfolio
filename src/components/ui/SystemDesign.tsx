import { ArrowDown, Database, Cpu, Globe, Server, Smartphone, Zap } from 'lucide-react';

export function SystemDesign() {
  return (
    <div className="w-full bg-muted/30 rounded-2xl border border-border p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-noto font-bold tracking-tight mb-4">FleetLink System Architecture</h3>
          <p className="text-foreground/60 max-w-lg mx-auto">
            High-concurrency architecture designed for real-time 50,000+ vehicle tracking.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-12">
          {/* Top Layer: Clients */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl border border-border bg-background shadow-sm">
              <Smartphone size={24} className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">Mobile App</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl border border-border bg-background shadow-sm">
              <Globe size={24} className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">Web Dashboard</span>
            </div>
            <div className="hidden md:flex flex-col items-center gap-3 p-4 rounded-xl border border-border bg-background shadow-sm">
              <Server size={24} className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">IoT Devices</span>
            </div>
          </div>

          <ArrowDown className="text-border" />

          {/* Middle Layer: Load Balancer & Gateway */}
          <div className="w-full max-w-md p-6 rounded-xl border-2 border-accent bg-accent/5 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              Load Balancer / Nginx
            </div>
            <div className="flex justify-center gap-8 py-2">
              <div className="flex flex-col items-center gap-1">
                <Zap size={20} className="text-accent" />
                <span className="text-sm font-bold">API Gateway</span>
              </div>
            </div>
          </div>

          <ArrowDown className="text-border" />

          {/* Core Layer: Microservices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            <div className="p-6 rounded-xl border border-border bg-background shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <Cpu size={20} />
                </div>
                <h4 className="font-bold text-sm">Ingestion Service (Go)</h4>
              </div>
              <ul className="text-xs space-y-2 text-foreground/60">
                <li>• UDP/TCP Packet parsing</li>
                <li>• Data validation</li>
                <li>• Real-time broadcast</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-background shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                  <Database size={20} />
                </div>
                <h4 className="font-bold text-sm">Business Logic (PHP/Laravel)</h4>
              </div>
              <ul className="text-xs space-y-2 text-foreground/60">
                <li>• Auth & Identity</li>
                <li>• Fleet Management</li>
                <li>• Reporting engine</li>
              </ul>
            </div>
          </div>

          <ArrowDown className="text-border" />

          {/* Persistence Layer */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-xl">
            <div className="p-4 rounded-xl border border-dashed border-border text-center bg-muted/50">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2">Relational</h5>
              <span className="text-sm font-bold">MySQL Cluster</span>
            </div>
            <div className="p-4 rounded-xl border border-dashed border-border text-center bg-muted/50">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-2">Time-Series / Cache</h5>
              <span className="text-sm font-bold">MongoDB / Redis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
