export const getAssetUrl = (asset: any) =>
  asset?.fields?.file?.url
    ? `https:${asset.fields.file.url}`
    : "";