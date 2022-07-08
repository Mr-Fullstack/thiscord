export function setPageName(name:string | undefined){
    document.body.classList.add(name? name : '');

}
export function removePageName(name:string | undefined){
    document.body.classList.remove(name? name : '');
}

