import * as cheerio from "cheerio";

function getTextFromChildTag(el: cheerio.Element, tagName: string) {
  const tag = el.children.find((child) => {
    return child.type === "tag" && child.name === tagName;
  }) as cheerio.Element | undefined;

  const textNode = tag?.children[0];

  if (textNode?.type === "text") return textNode.data;
}

export async function getSummary() {
  const response = await fetch("http://static.cricinfo.com/rss/livescores.xml");

  const data = await response.text();

  const $ = cheerio.load(data, {
    xml: true,
  });

  const summaries = $("item")
    .map((i, el) => {
      const link = getTextFromChildTag(el, "link");

      return {
        title: getTextFromChildTag(el, "title"),
        link,
        description: getTextFromChildTag(el, "description"),
        guid: getTextFromChildTag(el, "guid"),
        matchId: link?.split(".html")[0].split("/")[6],
      };
    })
    .toArray();

  return summaries;
}
