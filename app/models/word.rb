class Word < ApplicationRecord
  belongs_to :group, optional: true
  has_many :guesses
end
