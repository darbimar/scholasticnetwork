
export const getItemsFromLS = () => {
    const data = localStorage.getItem('list');
    return data ? JSON.parse(data) : [];
}