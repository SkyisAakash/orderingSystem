@orders.each do |order|
    json.set! order.id do
        json.extract! order, :id, :coffee, :method, :number_of_cases, :packets_per_case, :ship_date, :priority, :notes
    end
end