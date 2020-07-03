const deleteTextNodes = (selector) => {
    const elem = document.querySelector(selector);
    const childs = elem.childNodes;

    for (let i = 0; i < childs.length; i++) {
        if (childs[i].nodeType === 3) childs[i].remove();
    }
};

export default deleteTextNodes;