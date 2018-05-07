class Board < ApplicationRecord
  validates :name, :user_id, :secret, presence: true
  belongs_to :user
end
