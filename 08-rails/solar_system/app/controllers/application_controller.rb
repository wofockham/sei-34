class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token # You only this for handwritten forms.
end
