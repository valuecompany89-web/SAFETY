export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F8F9FA]">
      {/* Structural Grid */}
      <div className="absolute inset-0 grid-background" />
      
      {/* Industrial Accents - Blueprint-like lines */}
      <div className="blueprint-line h-px w-full top-20 opacity-30" />
      <div className="blueprint-line h-px w-full bottom-20 opacity-30" />
      <div className="blueprint-line w-px h-full left-20 opacity-30" />
      <div className="blueprint-line w-px h-full right-20 opacity-30" />
      
      {/* Subtle Depth Gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 100% 0%, #0F5132 0%, transparent 40%),
                       radial-gradient(circle at 0% 100%, #CCFF00 0%, transparent 40%)`,
          filter: 'blur(100px)',
        }}
      />
      
      {/* Corner Technical Markers */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-industrial-green/20" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-industrial-green/20" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-industrial-green/20" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-industrial-green/20" />
    </div>
  );
};
