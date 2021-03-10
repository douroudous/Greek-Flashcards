class Word < ApplicationRecord
  belongs_to :group, optional: true
end
