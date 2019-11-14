class DashboardController < ApplicationController
  def brother
    brother = %w[ Groucho Harpo Chico Zeppo ].sample
    render :plain => brother
  end

  def time
    render :plain => Time.now.to_s
  end

  def uptime
    render :plain => `uptime`
  end

  def info
    brother = %w[ Groucho Harpo Chico Zeppo ].sample
    time = Time.now.to_s
    uptime = `uptime`

    render :json => {
      :brother => brother,
      :time => time,
      :uptime => uptime,
      :fortune => `fortune -a` # This will not work on Heroku
    }
  end
end
