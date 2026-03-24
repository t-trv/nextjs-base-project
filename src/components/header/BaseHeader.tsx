// This is base header component, use this component to wrap all of header content

export default function BaseHeader({ children }: { children: React.ReactNode }) {
  return <header className="sticky top-0 z-999 bg-primary text-white">{children}</header>;
}
