class Note < ApplicationRecord
    belongs_to :user
    validates :body, uniqueness: :true
end
