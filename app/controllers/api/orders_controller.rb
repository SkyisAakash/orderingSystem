class Api::OrdersController < ApplicationController
    def index
       pageNum = params[:page] || 1
       @orders = Order.paginate(page: pageNum)
        @pages = Order.pages
        @page = pageNum
    end

    def create
        @order = Order.new(order_params)
        if @order.save
            @orders = Order.all
            @pages = Order.pages
            render :index
        else
            render json: @order.errors.full_messages, status: 422
        end
    end

    private

    def order_params
        params.require(:order).permit(:coffee, :method, :number_of_cases, :packets_per_case, :ship_date, :priority, :notes)
    end

end