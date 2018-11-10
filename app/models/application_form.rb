class ApplicationForm
  include ActiveModel::Model

  attr_accessor :height, :weight, :old
  
  validates :height, :weight, :old, numericality: { only_integer: true, greater_than: 0, less_than: 500 }
  # validates :weight, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 500 }
  # validates :old   , presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 500 }
  
  # validates_inclusion_of :height, in: 0..500
  # validates_inclusion_of :weight, in: 0..500
  # validates_inclusion_of :old   , in: 0..500
end