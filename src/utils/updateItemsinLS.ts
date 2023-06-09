export const updateLocalStorage = (data: any) => {
    localStorage.setItem('list', JSON.stringify(data))
}

