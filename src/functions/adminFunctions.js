export const handleAdminCodeValidation = (adminCode) => {
    if (adminCode === import.meta.env.VITE_ADMIN_CODE_1) {
        return true;
    }
    if (adminCode === import.meta.env.VITE_ADMIN_CODE_2) {
        return true;
    }
    else {
        return false;
    }
}