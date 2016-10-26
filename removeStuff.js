
localStorage.clear();

sessionStorage.clear();


/*
TODO this needs to remove more cookies

tries:
   .main.tld / localhost / ip
   .document.domain
   document.domain
*/

document.cookie.split(';')
   .map(s => s.split('=')[0])
   .map(s => ''.trim.apply(s))
   .forEach(s => {
      document.cookie = `${s}=; Path=/; Expires=Fri, 3 Aug 2001 20:47:11 UTC; Domain=${document.domain.match(/([\d\.]+)$|((\.\w*){0,2}\w+)$/)[0]}`;
      document.cookie = `${s}=; Path=/; Expires=Fri, 3 Aug 2001 20:47:11 UTC; Domain=.${document.domain}`;
      document.cookie = `${s}=; Path=/; Expires=Fri, 3 Aug 2001 20:47:11 UTC; Domain=${document.domain}`;
   });