declare global {
  interface String {
    stripHtml: () => string;
    isInvalid: () => boolean;
  }
}

String.prototype.stripHtml = function (): string {
  return this.replace(/<[^>]+>/g, "");
};

String.prototype.isInvalid = function (): boolean {
  if (this === undefined || this === null || this.trim() === "") {
    return true;
  }
  return false;
};

export {};