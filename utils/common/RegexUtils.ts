/** 01011112222 -> 010-1111-2222 , 010****2222 -> 010-****-2222*/
export const convertTlno = (str: string) => {
    return str.replace(/^(\d{2,3})(\d{3,4}|\*{3,4})(\d{4})$/, `$1-$2-$3`);
};

/** url 유효성 통과시 true */
export const isUrl = (url: string) => {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return url.match(regex);
};

export const isEmail = (email: string) => {
    const emailRegex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
};
