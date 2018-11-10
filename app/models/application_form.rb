class ApplicationForm
  include ActiveModel::Model

  attr_accessor :height, :weight, :old#, :gender, :activity, :purpose
  
  validates :height, :weight, :old, numericality: { only_integer: true, greater_than: 0, less_than: 500 }

end