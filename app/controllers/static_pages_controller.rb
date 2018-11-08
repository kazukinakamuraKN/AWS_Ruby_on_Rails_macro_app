class StaticPagesController < ApplicationController
  
  def home
    @applicationForm = ApplicationForm.new
    # フォーム入力値がエラーの際にエラー文を表示しようとした。
    # その際、errorsがnil、未定義のメソッドであるというエラー。
    # # homeアクションでもresultアクションのように、ApplicationForm.newによる初期化が必要。
    # https://stackoverflow.com/questions/18136632/undefined-method-errors-for-nilnilclass-when-calling-on-errors-method
  end
  
  def result
    # @msg ="hellooooooo"
    @applicationForm = ApplicationForm.new(applicationForm_params)
    unless @applicationForm.valid? then render 'home' end
  end
  
  private
    
    def applicationForm_params
      params.permit(:height, :weight, :old)
    end
end