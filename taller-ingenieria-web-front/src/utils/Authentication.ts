export const isAuthenticated  = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return true;
    }
    return false;
}

export const deleteToken = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
}

export const isAdmin = () => {
    const role = localStorage.getItem('role');
    if (role == 'ADMIN') {
        return true;
    }
    return false;
}
