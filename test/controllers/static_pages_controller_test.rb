require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get result" do
    get static_pages_result_url
    assert_response :success
  end

end
