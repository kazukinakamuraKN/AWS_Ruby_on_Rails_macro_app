class ApplicationForm
  include ActiveModel::Model

  attr_accessor :height, :weight, :old

  validates :height, :numericality => true, presence: true
  validates :weight, :numericality => true, presence: true
  validates :old   , :numericality => true, presence: true
end