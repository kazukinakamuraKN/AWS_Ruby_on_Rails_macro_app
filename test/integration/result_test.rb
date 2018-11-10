require 'test_helper'

class ResultTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  test "valid root_path test" do
    get root_path
    assert_template 'static_pages/home'
  end
  
  test "valid home_path test" do
    get home_path
    assert_template 'static_pages/home'
  end
  
  test "valid result test" do
    get root_path
    post result_path, params: { gender:   "male",
                                activity: "low",
                                purpose:  "loss",
                                height:   123,
                                weight:   123,
                                old:      123}
    assert_template 'static_pages/result'
  end
  
  test "invalid result test" do
    get root_path
    post result_path, params: { gender:   "",
                                activity: "",
                                purpose:  "",
                                height:   "",
                                weight:   "",
                                old:      ""}
    assert_template 'static_pages/home'
  end
  
  test "valid numericality option test" do
    get root_path
    post result_path, params: { gender:   "male",
                                activity: "low",
                                purpose:  "loss",
                                height:   1234,
                                weight:   1234,
                                old:      1234}
    assert_template 'static_pages/home'
  end
  
  test "valid numericality test" do
    get root_path
    post result_path, params: { gender:   "male",
                                activity: "low",
                                purpose:  "loss",
                                height:   "a",
                                weight:   "a",
                                old:      "a"}
    assert_template 'static_pages/home'
  end
  
    test "valid blank test" do
    get root_path
    post result_path, params: { gender:   "male",
                                activity: "low",
                                purpose:  "loss",
                                height:   "",
                                weight:   "",
                                old:      ""}
    assert_template 'static_pages/home'
  end
  
end
