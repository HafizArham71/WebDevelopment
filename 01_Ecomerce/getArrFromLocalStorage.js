export let getArrFromLocalStorage = () => {
    let localArr = JSON.parse(localStorage.getItem('localArrProd'));
    if (!localArr) {
        return [];
    }
    return localArr;
}