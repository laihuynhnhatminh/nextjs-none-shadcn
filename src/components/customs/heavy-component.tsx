type HeavyComponentProps = Readonly<{
  name: string;
}>;

export function HeavyComponent({ name }: HeavyComponentProps) {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
        <h4 className="font-semibold text-gray-800">Heavy Component: {name}</h4>
        <p className="text-gray-600 mt-2">
          This component uses tw-animate-css for smooth animations!
        </p>
        <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-3 rounded border">
            <strong>Animation:</strong> 🎭 tw-animate-css
          </div>
          <div className="bg-white p-3 rounded border">
            <strong>Performance:</strong> ⚡ Lazy mounted
          </div>
        </div>
      </div>

      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
        <p className="text-sm text-green-800">
          <strong>tw-animate-css:</strong> Clean, pre-built animations as
          Tailwind classes!
        </p>
      </div>
    </div>
  );
}
