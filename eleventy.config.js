import markdownItAttrs from "markdown-it-attrs";

export default function (eleventyConfig) {
  // Static files copied as-is into the output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Support {.align-center} / {width="300px"} after images, like kramdown did
  eleventyConfig.amendLibrary("md", (md) => md.use(markdownItAttrs));

  // All stones, in the same order Jekyll used (by file name)
  eleventyConfig.addCollection("pierres", (collectionApi) =>
    collectionApi
      .getFilteredByTag("pierre")
      .sort((a, b) => a.fileSlug.localeCompare(b.fileSlug))
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
}
