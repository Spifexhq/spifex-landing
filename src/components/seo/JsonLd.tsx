export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is generated from trusted server-side objects.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
