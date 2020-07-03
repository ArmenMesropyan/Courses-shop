const cookieActions = {
    setCookie(cname, cvalue, exdays) {
        const date = new Date();
        date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
    },
    getCookie(cname) {
        const name = `${cname}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return '';
    },
    checkCookie(cname) {
        const user = this.getCookie(cname);
        if (user !== '') return true;
        return false;
    },
    removeCookie(name) {
        document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`
    }
};

export default cookieActions;