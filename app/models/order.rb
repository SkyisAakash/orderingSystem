# == Schema Information
#
# Table name: orders
#
#  id               :bigint(8)        not null, primary key
#  coffee           :string           not null
#  method           :string           not null
#  number_of_cases  :integer          not null
#  packets_per_case :integer          not null
#  ship_date        :date             not null
#  priority         :boolean          default(FALSE)
#  notes            :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Order < ApplicationRecord
    validates :coffee, :method, :number_of_cases, :packets_per_case, :ship_date, presence: true

    class << self
        def per_page
            25
        end
    end
end
