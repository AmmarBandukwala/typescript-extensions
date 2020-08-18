interface String {  
    normalize: () => string;
    isNullOrEmpty: (val: any) => boolean;
}

String.prototype.normalize = function (): string {  
    return this.replace(/^\s*|\s(?=\s)|\s*$/g, "");
};

String.prototype.isNullOrEmpty = function (val: any): boolean {  
    if (val === undefined || val === null || val.trim() === '') {
        return true;
    }
    return false;
};