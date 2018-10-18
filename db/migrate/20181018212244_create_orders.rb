class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :coffee, null: false
      t.string :method, null: false
      t.integer :number_of_cases, null: false
      t.integer :packets_per_case, null: false
      t.date :ship_date, null: false
      t.boolean :priority, default: false
      t.text :notes
      t.timestamps

    end
  end
end
