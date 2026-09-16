type JsonLdProps = {
  data: Record<string, unknown>;
};

/**
 * Renders a single JSON-LD structured data block.
 * Pass a plain object matching the schema.org type you need.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
