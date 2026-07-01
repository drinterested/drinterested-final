import Script from "next/script"

interface SEOSchemaProps {
  schema?: object
  id?: string
}

export default function SeoSchema({ schema, id = "seo-schema" }: SEOSchemaProps) {
  if (!schema) return null

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  )
}
