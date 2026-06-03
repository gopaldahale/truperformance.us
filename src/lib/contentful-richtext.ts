// src/lib/contentful-richtext.ts

export function richTextToPlainText(richText: any): string {
  if (!richText?.content) return "";

  const extractText = (node: any): string => {
    if (node.nodeType === "text") {
      return node.value;
    }

    if (node.content) {
      return node.content.map(extractText).join(" ");
    }

    return "";
  };

  return extractText(richText).trim();
}