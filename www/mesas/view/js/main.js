const closeModal = () => {
    el = document.getElementById('myModal');
    el.classList.remove('myModalOpen');
    el.classList.add('myModal');
}
const openModal = () => {
    let el = document.getElementById('myModal');
    el.classList.remove('myModal');
    el.classList.add('myModalOpen');
}
const openModalCart = () => {
    let el = document.getElementById('cartModal');
    el.classList.remove('cartModal');
    el.classList.add('cartModalOpen');
}
