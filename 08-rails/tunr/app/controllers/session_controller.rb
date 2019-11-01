class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by :email => params[:email]
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id # Remember the user id from this moment on.
      redirect_to root_path
    else
      flash[:error] = "Invalid email address or password"
      redirect_to login_path # We don't render on failure because we don't want to help a cracker.
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
