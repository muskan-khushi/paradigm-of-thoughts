const Grain = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[99] overflow-hidden opacity-[0.05] mix-blend-overlay">
      <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-noise" />
    </div>
  );
};

export default Grain;