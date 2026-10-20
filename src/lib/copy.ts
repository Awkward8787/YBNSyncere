export class Copy {
  static todo(paragraph: string): { flagged: boolean; text: string } {
    const match = /^TODO:\s*/.exec(paragraph);
    if (!match) return { flagged: false, text: paragraph };
    return { flagged: true, text: paragraph.slice(match[0].length) };
  }
}
