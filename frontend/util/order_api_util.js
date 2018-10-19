export const fetchOrders = (page) => {
    return $.ajax({
        url:'api/orders',
        method:'GET',
        data:{page}
    });
};

export const createOrder = order => {
    return $.ajax({
        url:'api/orders',
        method:'POST',
        data:{order}
    });
};