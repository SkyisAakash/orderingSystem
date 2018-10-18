export const fetchOrders = () => {
    return $.ajax({
        url:'api/orders',
        method:'GET'
    });
};

export const createOrder = order => {
    return $.ajax({
        url:'api/orders',
        method:'POST',
        data:{order}
    });
};