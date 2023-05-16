export default function Wrapper({children}: {children: React.ReactNode;}) {
 
  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-12">{children}</div>
  );
}