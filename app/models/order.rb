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

        def pages(per_page = 25)
            pages = count / per_page.to_f
            pages += 1 if pages % 1 > 0
            pages.to_i
        end

        def paginate(page: 1, per_page: 25)
            page = page.to_i
            per_page = per_page.to_i
            offset = (page - 1) * per_page
            limit(per_page).offset(offset)
        end
    end
end
