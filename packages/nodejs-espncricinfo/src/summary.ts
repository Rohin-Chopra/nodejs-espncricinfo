import * as cheerio from "cheerio";

export class Summary {
  private getTextFromChildTag(el: cheerio.Element, tagName: string) {
    const tag = el.children.find((child) => {
      return child.type === "tag" && child.name === tagName;
    }) as cheerio.Element | undefined;

    const textNode = tag?.children[0];

    if (textNode?.type === "text") return textNode.data;
  }

  public async getSummary() {
    const response = await fetch(
      "http://static.cricinfo.com/rss/livescores.xml"
    );

    const data = await response.text();

    const $ = cheerio.load(data, {
      xml: true,
    });

    const summaries = $("item")
      .map((i, el) => {
        const link = this.getTextFromChildTag(el, "link");

        return {
          title: this.getTextFromChildTag(el, "title"),
          link,
          description: this.getTextFromChildTag(el, "description"),
          guid: this.getTextFromChildTag(el, "guid"),
          matchId: link?.split(".html")[0].split("/")[6],
        };
      })
      .toArray();

    return summaries;
  }
}
