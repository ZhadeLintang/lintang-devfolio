import React from 'react';
import { QrCode, Award, Code2, Sparkles, ShieldCheck } from 'lucide-react';

interface CertificateProps {
  onClose?: () => void;
}

const Certificate: React.FC<CertificateProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-background dark:bg-[#111] flex flex-col items-center justify-center p-4 md:p-8 font-sans transition-colors duration-300">
      
      {/* Controls (Not printed) */}
      <div className="w-full max-w-[1123px] flex justify-between items-center mb-6 print:hidden">
        {onClose && (
          <button 
            onClick={onClose} 
            className="brutal-button bg-white text-black px-6 py-3 font-black text-lg flex items-center gap-2"
          >
            ← Back to Portfolio
          </button>
        )}
        <button 
          onClick={() => window.print()}
          className="brutal-button bg-primary text-black px-6 py-3 font-black text-lg flex items-center gap-2 ml-auto"
        >
          Print Certificate
        </button>
      </div>

      {/* Printable Area - A4 Landscape Approximate */}
      <div className="w-full max-w-[1123px] min-h-[794px] bg-white border-[12px] border-black shadow-[24px_24px_0_0_#111] dark:shadow-[24px_24px_0_0_#ffd84d] print:shadow-none print:border-[8px] print:m-0 relative overflow-hidden flex flex-col p-12 md:p-20 text-black">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent -mr-32 -mt-32 rounded-full border-[8px] border-black opacity-20 pointer-events-none print:opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary -ml-48 -mb-48 rotate-45 border-[8px] border-black opacity-20 pointer-events-none print:opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-5 pointer-events-none"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-24 right-24 bg-success border-4 border-black w-16 h-16 rotate-12 flex items-center justify-center print:border-black"><Code2 size={32} className="text-black"/></div>
        <div className="absolute bottom-40 right-40 bg-secondary border-4 border-black w-20 h-20 rounded-full flex items-center justify-center -rotate-12 print:border-black"><Sparkles size={40} className="text-black"/></div>
        
        {/* Header */}
        <div className="flex justify-between items-start w-full relative z-10 border-b-[8px] border-black pb-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-black text-white p-4">
              <ShieldCheck size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-widest uppercase">LINTANG<span className="text-primary">.DEV</span></h2>
              <p className="text-lg font-bold">Official Credential</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-background border-4 border-black px-4 py-2 inline-block -rotate-2">
              <p className="font-black text-xl uppercase tracking-wider">ID: LNTG-2026-X99</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center relative z-10 space-y-10">
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-4">
              Certificate <span className="text-transparent" style={{WebkitTextStroke: '3px black'}}>of Achievement</span>
            </h1>
            <p className="text-xl font-bold bg-primary inline-block px-4 py-1 border-2 border-black rotate-1">
              Frontend Developer & UI/UX Creative Excellence
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-2xl font-medium">This certificate is proudly awarded to</p>
            <div className="bg-black text-white border-4 border-black inline-block px-12 py-4 shadow-[8px_8px_0_0_#ff8ad8] hover:shadow-[12px_12px_0_0_#ff8ad8] transition-shadow print:shadow-[8px_8px_0_0_#ff8ad8]">
              <h2 className="text-4xl md:text-6xl font-black uppercase">Labib Lintang Habibie</h2>
            </div>
          </div>

          <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed border-l-8 border-primary pl-6 text-left bg-white/80 backdrop-blur-sm p-4">
            "This certificate is proudly awarded for outstanding creativity, frontend development skills, and innovation in modern web design."
          </p>
        </div>

        {/* Footer / Signatures */}
        <div className="flex justify-between items-end w-full relative z-10 mt-12 pt-8">
          {/* QR Code Placeholder */}
          <div className="bg-white border-8 border-black p-4 flex flex-col items-center">
            <QrCode size={80} className="mb-2 text-black" />
            <p className="font-bold text-xs uppercase text-black">Verify Code</p>
          </div>

          {/* Stamp */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-[8px] border-black bg-success flex items-center justify-center -rotate-12">
              <div className="text-center text-black">
                <Award size={40} className="mx-auto mb-1" />
                <p className="font-black text-[10px] uppercase">Verified</p>
                <p className="font-black text-[10px] uppercase">2026</p>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="text-center">
            <div className="border-b-4 border-black w-64 mb-2 flex items-end justify-center h-16">
              <span className="font-display text-4xl -rotate-6 signature-font">Lintang.dev</span>
            </div>
            <p className="font-black text-xl uppercase">Lead Developer</p>
            <p className="font-bold text-lg">Date: 2026</p>
          </div>
        </div>

      </div>

      {/* Print styles using tailwind via simple class addition in index.css or here */}
      <style>{`
        @media print {
          body {
            background-color: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page {
            size: landscape;
            margin: 0;
          }
        }
        .signature-font {
          font-family: 'Brush Script MT', cursive;
        }
      `}</style>
    </div>
  );
};

export default Certificate;
