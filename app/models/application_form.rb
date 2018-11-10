class ApplicationForm
  include ActiveModel::Model

  attr_accessor :height, :weight, :old

  validates :height , :numericality => true, presence: true
  validates :weight , :numericality => true, presence: true
  validates :old   , :numericality => true, presence: true
  validates_inclusion_of :old, in: 0..500
  validates_inclusion_of :weight, in: 0..500
  validates_inclusion_of :height, in: 0..500

end