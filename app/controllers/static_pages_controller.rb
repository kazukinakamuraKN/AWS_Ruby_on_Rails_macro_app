class StaticPagesController < ApplicationController
  def result
    @msg ="hellooooooo"
    @applicationForm = ApplicationForm.new(applicationForm_params)
    unless @applicationForm.valid? then render 'home' end
  end
  
  private
    
    def applicationForm_params
      params.permit(:height, :weight, :old)
    end
end